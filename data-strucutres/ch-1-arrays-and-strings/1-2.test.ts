import { describe, expect, test } from "vitest";
import * as funcs from "./1-2";

for (let key in funcs) {
  let func = funcs[key];

  describe(`Check Permutation: ${key}`, () => {
    [
      ["abcdefghi", "ihgfedcba"],
      ["1a1", "a11"],
      ["1234567812345678", "8877665544332211"],
      ["icarraci", "carcarii"],
    ].forEach((args) => {
      test(`should return true for strings that are permutations: '${args[0]}' & '${args[1]}'`, () => {
        expect(func(args[0], args[1])).toBeTruthy();
      });
    });

    [
      ["abcdefghiz", "ihgfedcbaa"],
      ["1a1", "11"],
      ["1122334455667788", "9911223344556677"],
      ["45678", "1239"],
    ].forEach((args) => {
      test(`should return false for strings that are not permutations: '${args[0]}' & '${args[1]}'`, () => {
        expect(func(args[0], args[1])).toBeFalsy();
      });
    });
  });
}
