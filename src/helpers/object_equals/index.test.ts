import { objectEquals } from "helpers/object_equals";

describe("helper functions", () => {
  describe("objectEquals", () => {
    it("should return true for objects with same properties, false otherwise", () => {
      expect(
        objectEquals({ n: 1, str: "hello" }, { n: 1, str: "hello" })
      ).toBeTruthy();

      expect(
        objectEquals({ n: 1, str: "hi" }, { n: 1, str: "hello" })
      ).toBeFalsy();

      const date = new Date();
      expect(
        objectEquals({ prop1: null, prop2: date }, { prop1: null, prop2: date })
      ).toBeTruthy();

      expect(
        objectEquals(
          { obj: { a: 1, b: 2 }, n: NaN },
          { obj: { a: 1, b: 2 }, n: NaN }
        )
      ).toBeTruthy();

      expect(
        objectEquals(
          { obj: { a: 1, b: 2 }, n: NaN },
          { obj: { a: 2, b: 1 }, n: NaN }
        )
      ).toBeFalsy();

      expect(objectEquals<null | undefined>(null, undefined)).toBeFalsy();

      expect(
        objectEquals<{ prop: string | number }>({ prop: 1 }, { prop: "1" })
      ).toBeFalsy();
    });
  });
});
