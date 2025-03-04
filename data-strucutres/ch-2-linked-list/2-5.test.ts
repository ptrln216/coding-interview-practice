import { describe, expect, test } from "vitest";
import {
  sumLinkedListForwardOrder,
  sumLinkedListReverseOrder,
  sumLinkedListReverseOrderRecursive,
  sumLinkedListForwardOrderStack,
} from "./2-5";
import { arrayToLinkedList, linkedListToArray } from "./helpers";

describe("Sum Lists Reverse Order:", () => {
  const inputs: { one: number[]; two: number[]; expected: number[] }[] = [
    {
      one: [1],
      two: [1],
      expected: [2],
    },
    {
      one: [1, 1],
      two: [4, 4],
      expected: [5, 5],
    },
    {
      one: [4, 4],
      two: [4, 8],
      expected: [8, 2, 1],
    },
    {
      one: [4, 5, 3],
      two: [8],
      expected: [2, 6, 3],
    },
    {
      one: [4, 9, 3],
      two: [8],
      expected: [2, 0, 4],
    },
    {
      one: [2, 9],
      two: [4, 9, 9, 9, 9, 9],
      expected: [6, 8, 0, 0, 0, 0, 1],
    },
    {
      one: [0],
      two: [9, 8, 7, 6, 5, 4, 3, 2, 1],
      expected: [9, 8, 7, 6, 5, 4, 3, 2, 1],
    },
  ];

  inputs.forEach(({ one, two, expected }) => {
    test(`should add ${one} and ${two} correctly`, () => {
      const head1 = arrayToLinkedList(one)!;
      const head2 = arrayToLinkedList(two)!;
      const res = sumLinkedListReverseOrder(head1, head2);
      expect(linkedListToArray(res)).toEqual(expected);
    });

    test(`should add ${one} and ${two} correctly recursively`, () => {
      const head1 = arrayToLinkedList(one)!;
      const head2 = arrayToLinkedList(two)!;
      const res = sumLinkedListReverseOrderRecursive(head1, head2);
      expect(linkedListToArray(res)).toEqual(expected);
    });
  });
});

describe("Sum Lists Forward Order:", () => {
  const inputs: { one: number[]; two: number[]; expected: number[] }[] = [
    {
      one: [1],
      two: [1],
      expected: [2],
    },
    {
      one: [1, 1],
      two: [4, 4],
      expected: [5, 5],
    },
    {
      one: [4, 4],
      two: [4, 8],
      expected: [9, 2],
    },
    {
      one: [4, 5, 3],
      two: [8],
      expected: [4, 6, 1],
    },
    {
      one: [4, 9, 3],
      two: [8],
      expected: [5, 0, 1],
    },
    {
      one: [2, 9],
      two: [4, 9, 9, 9, 9, 9],
      expected: [5, 0, 0, 0, 2, 8],
    },
    {
      one: [0],
      two: [9, 8, 7, 6, 5, 4, 3, 2, 1],
      expected: [9, 8, 7, 6, 5, 4, 3, 2, 1],
    },
  ];

  inputs.forEach(({ one, two, expected }) => {
    test(`should add ${one} and ${two} correctly`, () => {
      const head1 = arrayToLinkedList(one)!;
      const head2 = arrayToLinkedList(two)!;
      const res = sumLinkedListForwardOrder(head1, head2);
      expect(linkedListToArray(res)).toEqual(expected);
    });
  });

  inputs.forEach(({ one, two, expected }) => {
    test(`should add ${one} and ${two} correctly recursively`, () => {
      const head1 = arrayToLinkedList(one)!;
      const head2 = arrayToLinkedList(two)!;
      const res = sumLinkedListForwardOrderStack(head1, head2);
      expect(linkedListToArray(res)).toEqual(expected);
    });
  });
});
