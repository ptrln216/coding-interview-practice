import { describe, expect, test } from "vitest";
import * as funcs from "./2-6";
import { arrayToLinkedList } from "./helpers";

for (let key in funcs) {
  let func = funcs[key];

  describe(`Palindrome: ${key}`, () => {
    [
      [1, 2, 1],
      [1, 1],
      [2, 1, 3, 3, 1, 2],
      [2, 1, 3, 8, 9, 16, 16, 9, 8, 3, 1, 2],
      [2, 1, 3, 8, 9, 16, 11, 16, 9, 8, 3, 1, 2],
    ].forEach((args) => {
      test(`should return true for palindrome list: ${args}`, () => {
        expect(func(arrayToLinkedList(args))).toBeTruthy();
      });
    });

    [
      [1, 2, 2],
      [2, 1],
      [2, 1, 5, 4, 3, 2],
    ].forEach((args) => {
      test(`should return false for non-palindrome list: ${args}`, () => {
        expect(func(arrayToLinkedList(args))).toBeFalsy();
      });
    });
  });
}
