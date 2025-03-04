import { beforeEach, describe, expect, test } from "vitest";
import * as funcs from "./2-8";
import { arrayToLinkedList, ListNode } from "./helpers";

for (let key in funcs) {
  let func = funcs[key];

  describe(`Loop Detection: ${key}`, () => {
    let head: ListNode<number> | null;
    beforeEach(() => {
      head = arrayToLinkedList([1, 2, 3, 4, 5, 6]);
    });

    test("should return null when there is no loop", () => {
      expect(func(head)).toBeNull();
    });

    test("should return intersection node when there is a loop", () => {
      let cur = head;
      while (cur?.next) {
        cur = cur.next;
      }
      cur!.next = head;
      expect(func(head)).toEqual(head);
    });
  });
}
