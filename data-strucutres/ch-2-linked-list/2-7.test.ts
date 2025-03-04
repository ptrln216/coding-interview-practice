import { describe, test, expect } from "vitest";
import { ListNode } from "./helpers";
import * as funcs from "./2-7";

function generateList(length: number): ListNode<number> | null {
  let root: ListNode<number> | null = null;
  let cur: ListNode<number> | null = root;
  for (let i = 0; i < length; ++i) {
    const newNode = new ListNode<number>(100 + Math.random() * 99999);
    if (!cur) cur = newNode;
    else cur.next = newNode;
  }
  return root;
}

for (let key in funcs) {
  let func = funcs[key];

  describe(`Intersection: ${key}`, () => {
    const inputs: { len1: number; len2: number; lenCommon: number }[] = [
      {
        len1: 1,
        len2: 1,
        lenCommon: 1,
      },
      {
        len1: 3,
        len2: 3,
        lenCommon: 2,
      },
      {
        len1: 2,
        len2: 7,
        lenCommon: 3,
      },
      {
        len1: 14,
        len2: 2,
        lenCommon: 1,
      },
      {
        len1: 6,
        len2: 4,
        lenCommon: 11,
      },
    ];

    inputs.forEach(({ len1, len2, lenCommon }) => {
      let one = generateList(len1),
        two = generateList(len2),
        common = generateList(lenCommon);

      test(`should return null when there's no intersection`, () => {
        expect(func(one, two)).toBeNull();
      });
      test(`should return intersection node when there's an intersection`, () => {
        expect(func(one, two)).toEqual(common);
      });
    });
  });
}
