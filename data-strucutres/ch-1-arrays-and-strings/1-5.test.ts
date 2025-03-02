import { describe, expect, test } from "vitest";
import * as funcs from "./1-5";

for (let key in funcs) {
  const func = funcs[key];

  describe(`One Away: ${key}`, () => {
    ["abcdefg", "a1b2c3d4"].forEach((args) => {
      test(`should return true for the same string: '${args}'`),
        () => {
          expect(func(args, args)).toBeTruthy();
        };
    });
  });

  [
    ["pale", "ple"],
    ["pales", "pale"],
    ["pale", "bale"],
    ["pale", "pxle"],
    ["pale", "pate"],
    ["pale", "pald"],
    ["answers", "answer"],
    ["technology", "etechnology"],
  ].forEach((args) => {
    test(`should return true for strings that are one edit away: '${args[0]}' & '${args[1]}'`, () => {
      expect(func(args[0], args[1])).toBeTruthy();
    });
  });

  [
    ["pale", "pl"],
    ["paless", "pale"],
    ["pale", "bales"],
    ["abcdefghiz", "ihgfedcbaa"],
    ["1122334455667788", "9911223344556677"],
    ["45678", "1239"],
    ["abcd", "dcba"],
  ].forEach((args) => {
    test(`should return false for strings that are more than one edit: '${args[0]}' & '${args[1]}'`, () => {
      expect(func(args[0], args[1])).toBeFalsy();
    });
  });
}
