import { describe, expect, test } from "vitest";
import * as funcs from "./1-9";

for (let key in funcs) {
  let func = funcs[key];

  describe(`String Rotation: ${key}`, () => {
    test("should return false when strings have different lengths", () => {
      expect(func("abc", "defg")).toBeFalsy();
    });

    const baseStr =
      "abcdefghijklmnopqrstuvwxyz 01234567890 ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (let i = 0; i < 5; ++i) {
      const point = Math.round(baseStr.length * Math.random());
      const rotated = baseStr.slice(point) + baseStr.slice(0, point);
      test(`should return true for rotated string: '${rotated}'`, () => {
        expect(func(baseStr, rotated)).toBeTruthy();
      });
    }

    for (let i = 0; i < 5; ++i) {
      const point = Math.round(baseStr.length * Math.random());
      const nonRotated =
        baseStr.slice(point).split("").reverse().join("") +
        baseStr.slice(0, point).split("").reverse().join("");
      test(`should return false for non-rotated string: '${nonRotated}'`, () => {
        expect(func(baseStr, nonRotated)).toBeFalsy();
      });
    }
  });
}
