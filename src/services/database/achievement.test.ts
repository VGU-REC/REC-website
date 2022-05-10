import { objectEquals } from "helpers";
import { Achievement, OmitId } from "interfaces";
import { add, set, get, onSnapshot, update, del } from "services/database";

describe("database api", () => {
  describe("achievement", () => {
    // set up

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

    // create and read all docs

    it("`add` and `get` all docs in collection works", async () => {
      let docs: Achievement[];
      let docsOmitId: OmitId<Achievement>[];

      // add several entries to test
      await add("achievement", data1);
      await add("achievement", data2);

      docs = await get("achievement");
      docsOmitId = docs.map((doc) => {
        const { id, ...rest } = doc;
        return rest;
      });

      expect(docsOmitId).toContainEqual(data1);
      expect(docsOmitId).toContainEqual(data2);

      const totalData2 = docsOmitId.reduce(
        (acc, doc) => acc + Number(objectEquals(doc, data2)),
        0
      );
      expect(totalData2).toBeGreaterThanOrEqual(1);

      // add already existing data to see if a new entry is added
      await add("achievement", data2);

      docs = await get("achievement");
      docsOmitId = docs.map((doc) => {
        const { id, ...rest } = doc;
        return rest;
      });

      expect(docsOmitId).toContainEqual(data2); // still contains data2

      const newTotalData2 = docsOmitId.reduce(
        (acc, doc) => acc + Number(objectEquals(doc, data2)),
        0
      );
      expect(newTotalData2).toBe(totalData2 + 1); // new data2 added
    });

    // create and read all docs

    it("`set` and `get` all docs works", async () => {
      const id1 = "new cool achievement";
      const id2 = "new cooler achievement";

      await set("achievement", id1, data1);
      await set("achievement", id2, data2);

      const docs = await get("achievement");

      expect(docs).toContainEqual<Achievement>({ id: id1, ...data1 });
      expect(docs).toContainEqual<Achievement>({ id: id2, ...data2 });
    });

    // create and read a single doc

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

    // update

    it("`update` works", async () => {
      const id = "an achievement";
      await set("achievement", id, data1);
      await update("achievement", id, { title: "Nice" });

      const doc = await get("achievement", id);
      expect(doc).toEqual<Achievement>({ id, ...data1, title: "Nice" });
    });

    // realtime update of data

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

    // delete

    it("`del` works", async () => {
      const id = "never gonna give you up";
      let docs: Achievement[];

      await set("achievement", id, data1);

      docs = await get("achievement");
      const totalDocs = docs.length;

      await del("achievement", id);

      docs = await get("achievement");
      const newTotalDocs = docs.length;

      expect(newTotalDocs).toBe(totalDocs - 1);
      expect(docs.every((doc) => doc.id !== id)).toBeTruthy(); // doc with `id` deleted
    });
  });
});
