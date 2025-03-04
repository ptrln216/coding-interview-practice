import { describe, expect, test } from "vitest";
import * as funcs from "./2-4";
import { arrayToLinkedList, linkedListToArray } from "./helpers";

for (let key in funcs) {
  let func = funcs[key];

  describe(`Partition: ${key}`, () => {
    const inputs: { list: number[]; value: number; expected: number[] }[] = [
      {
        list: [5, 8, 7, 4, 9, 15, 30],
        value: 3,
        expected: [5, 8, 7, 4, 9, 15, 30],
      },
      {
        list: [5, 8, 7, 4, 9, 15, 30],
        value: 31,
        expected: [5, 8, 7, 4, 9, 15, 30],
      },
      {
        list: [5, 8, 3, 2, 7, 1, 4, 9, 15, 30],
        value: 2,
        expected: [1, 5, 8, 3, 2, 7, 4, 9, 15, 30],
      },
      {
        list: [5, 8, 3, 2, 7, 1, 4, 9, 15, 30],
        value: 7,
        expected: [5, 3, 2, 1, 4, 8, 7, 9, 15, 30],
      },
      {
        list: [4, 9, 15, 30, 5, 8, 3, 2, 2, 3, 7, 1, 15, 5, 6, 7],
        value: 6,
        expected: [4, 5, 3, 2, 2, 3, 1, 5, 9, 15, 30, 8, 7, 15, 6, 7],
      },
      {
        list: [4, 9, 15, 30, 5, 8, 3, 2, 2, 3, 7, 1, 15, 5, 6, 7],
        value: 17,
        expected: [4, 9, 15, 5, 8, 3, 2, 2, 3, 7, 1, 15, 5, 6, 7, 30],
      },
      {
        list: [4, 9, 15, 30, 5, 8, 20, 25, 20, 21, 21, 7, 1, 15, 5, 6, 7],
        value: 14,
        expected: [4, 9, 5, 8, 7, 1, 5, 6, 7, 15, 30, 20, 25, 20, 21, 21, 15],
      },
    ];

    inputs.forEach(({ list, value, expected }) => {
      test(`should partition list ${list} around ${value}`, () => {
        let head = arrayToLinkedList(list);
        expect(linkedListToArray(func(head, value))).toEqual(expected);
      });
    });
  });
}
