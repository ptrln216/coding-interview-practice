import { describe, expect, test } from "vitest";
import * as funcs from "./2-3";
import { arrayToLinkedList, linkedListToArray } from "./helpers";

for (let key in funcs) {
  let func = funcs[key];

  describe("Delete Middle Node: ${key}", () => {
    test(`should throw error for invalid node`, () => {
      expect(() => func(null)).toThrow("Invalid Node");
      expect(() => func(undefined)).toThrow("Invalid Node");
      expect(() => func(arrayToLinkedList([11]))).toThrow("Invalid Node");
    });

    const inputs: { list: number[]; node: number; expected: number[] }[] = [
      {
        list: [5, 8],
        node: 1,
        expected: [8],
      },
      {
        list: [5, 8, 3, 2, 7, 1, 4, 9, 15, 30],
        node: 9,
        expected: [5, 8, 3, 2, 7, 1, 4, 9, 30],
      },
      {
        list: [5, 8, 3, 2, 7, 1, 4, 9, 15, 30],
        node: 5,
        expected: [5, 8, 3, 2, 1, 4, 9, 15, 30],
      },
      {
        list: [5, 8, 3, 2, 7, 1, 4, 9, 15, 30],
        node: 2,
        expected: [5, 3, 2, 7, 1, 4, 9, 15, 30],
      },
      {
        list: [5, 8, 3, 2, 7, 1, 4, 9, 15, 30],
        node: 3,
        expected: [5, 8, 2, 7, 1, 4, 9, 15, 30],
      },
    ];

    inputs.forEach(({ list, node, expected }) => {
      test(`should delete middle node (${node}th) in list ${list}`, () => {
        let head = arrayToLinkedList(list);
        let cur = head;
        for (let i = 0; i < node - 1; ++i) {
          cur = cur!.next;
        }
        func(cur);
        expect(linkedListToArray(head)).toEqual(expected);
      });
    });
  });
}
