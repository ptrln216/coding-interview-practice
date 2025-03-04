import { describe, expect, test } from "vitest";
import * as funcs from "./2-1";
import { arrayToLinkedList, linkedListToArray } from "./helpers";

for (let key in funcs) {
  let func = funcs[key];

  describe(`Remove Dups: ${key}`, () => {
    [
      {
        list: [5],
        expected: [5],
      },
      {
        list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        expected: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      },
      {
        list: [5, 5, 5, 5, 5],
        expected: [5],
      },
      {
        list: [2, 4, 5, 4, 5, 4, 6, 7, 6, 8],
        expected: [2, 4, 5, 6, 7, 8],
      },
      {
        list: [8, 6, 8, 6],
        expected: [8, 6],
      },
      {
        list: [8, 8, 9, 9, 9, 6, 6, 4, 4, 6, 6, 4, 4, 6, 9, 4, 8, 2, 3, 1],
        expected: [8, 9, 6, 4, 2, 3, 1],
      },
    ].forEach((args) => {
      test(`should remove duplicates`, () => {
        let head = arrayToLinkedList(args.list);
        func(head);
        expect(linkedListToArray(head)).toEqual(args.expected);
      });
    });
  });
}
