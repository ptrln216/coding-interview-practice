import { describe, expect, test } from "vitest";
import * as funcs from "./2-2";
import { arrayToLinkedList } from "./helpers";

for (let key in funcs) {
  let func = funcs[key];

  describe(`Return Kth to Last: ${key}`, () => {
    test(`should return null if k is out of reach`, () => {
      expect(func(0, arrayToLinkedList([5]))).toBeNull();
      expect(func(4, arrayToLinkedList([8, 5, 1]))).toBeNull();
    });

    [
      {
        list: [5],
        k: 1,
      },
      {
        list: [8, 5, 1],
        k: 3,
      },
      {
        list: [8, 5, 1],
        k: 1,
      },
      {
        list: [8, 5, 1],
        k: 2,
      },
      {
        list: [8, 8, 9, 9, 9, 6, 6, 4, 4, 6, 6, 4, 4, 6, 9, 4, 8, 2, 3, 1],
        k: 8,
      },
      {
        list: [8, 8, 9, 9, 9, 6, 6, 4, 4, 6, 6, 4, 4, 6, 9, 4, 8, 2, 3, 1],
        k: 16,
      },
    ].forEach((args) => {
      test(`should get the ${args.k}th element in list ${args.list}`, () => {
        expect(func(args.k, arrayToLinkedList(args.list))).toEqual(
          args.list[args.list.length - args.k]
        );
      });
    });
  });
}
