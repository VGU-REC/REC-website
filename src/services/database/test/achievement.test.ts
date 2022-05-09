import { Achievement, OmitId } from "interfaces";
import { add, set, get, onSnapshot, update, del } from "services/database";

describe("database api", () => {
  describe("achievement", () => {
    const data1: OmitId<Achievement> = {
      title: "Cool achievement",
      imagePath: "img.png",
      date: new Date("December 17, 1995 03:24:00"),
    };
    const data2: OmitId<Achievement> = {
      title: "Another cool achievement",
      imagePath: "img2.png",
      date: new Date("July 30, 2008 14:02:59"),
    };

    it("`add` and `get` all docs in collection works", async () => {
      await add("achievement", data1);
      await add("achievement", data2);

      const docs = await get("achievement");
      const docsOmitId: OmitId<Achievement>[] = docs.map((doc) => {
        const { id, ...rest } = doc;
        return rest;
      });

      expect(docsOmitId).toContainEqual(data1);
      expect(docsOmitId).toContainEqual(data2);
    });

    it("`set` and `get` all docs works", async () => {
      const id1 = "new cool achievement";
      const id2 = "new cooler achievement";

      await set("achievement", id1, data1);
      await set("achievement", id2, data2);

      const docs = await get("achievement");

      expect(docs).toContainEqual<Achievement>({ id: id1, ...data1 });
      expect(docs).toContainEqual<Achievement>({ id: id2, ...data2 });
    });

    it("`set` and `get` a single doc works", async () => {
      const id1 = "new cool achievement";
      const id2 = "new cooler achievement";

      await set("achievement", id1, data1);
      await set("achievement", id2, data2);

      const doc1 = await get("achievement", id1);
      const doc2 = await get("achievement", id2);

      expect(doc1).toEqual<Achievement>({ id: id1, ...data1 });
      expect(doc2).toEqual<Achievement>({ id: id2, ...data2 });
    });

    it.todo("`update` works");

    it("`onSnapshot` all docs works", async () => {
      const id = "an achievement";
      let totalChanges: number = 0;
      let docs: Achievement[] = [];

      // onSnapshot
      const unsub = onSnapshot("achievement", (achievements) => {
        totalChanges++;
        docs = achievements;
      });

      await set("achievement", id, data1);
      expect(totalChanges).toBe(1);
      expect(docs).toContainEqual<Achievement>({ id, ...data1 });

      await update("achievement", id, { title: "Nice" });
      expect(totalChanges).toBe(2);
      expect(docs).toContainEqual<Achievement>({ id, ...data1, title: "Nice" });

      // unsub
      unsub();

      await update("achievement", id, { title: "No title" });
      expect(totalChanges).toBe(2);
      expect(docs).toContainEqual<Achievement>({ id, ...data1, title: "Nice" });
    });

    it("`onSnapshot` single doc works", async () => {
      const id = "an achievement";
      let totalChanges: number = 0;
      let doc: Achievement = { id, ...data2 };

      // onSnapshot
      const unsub = onSnapshot("achievement", id, (achievement) => {
        totalChanges++;
        doc = achievement;
      });

      await set("achievement", id, data1);
      expect(totalChanges).toBe(1);
      expect(doc).toEqual<Achievement>({ id, ...data1 });

      await update("achievement", id, { title: "Nice" });
      expect(totalChanges).toBe(2);
      expect(doc).toEqual<Achievement>({ id, ...data1, title: "Nice" });

      // unsub
      unsub();

      await update("achievement", id, { title: "No title" });
      expect(totalChanges).toBe(2);
      expect(doc).toEqual<Achievement>({ id, ...data1, title: "Nice" });
    });

    it.todo("`del` works");
  });
});
