import { describe, expect, test } from "vitest";
import * as funcs from "./1-4";

for (let key in funcs) {
  let func = funcs[key];

  describe(`Palindrome Permutation: ${key}`, () => {
    [
      " ",
      "   ",
      "aabb",
      "ab a b",
      " a b a b ",
      "sasadfgsadfghjk;hjk;sadfghjk;dfghjk;",
      "sa sadfgsadfgh jk;hjkz;sadfg hjk;dfghjk;",
    ].forEach((args) => {
      test(`should return true for palindrome string: '${args}'`, () => {
        expect(func(args)).toBeTruthy();
      });
    });

    ["abcadef", "1234567890", "a b"].forEach((args) => {
      test(`should return false for non-palindrome string: '${args}'`, () => {
        expect(func(args)).toBeFalsy();
      });
    });
  });
}
