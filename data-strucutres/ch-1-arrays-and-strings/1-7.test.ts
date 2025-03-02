import { describe, expect, test } from "vitest";
import * as funcs from "./1-7";

for (let key in funcs) {
  let func = funcs[key];

  describe(`Rotate Matrix: ${key}`, () => {
    const inputs: { original: number[][]; rotated: number[][] }[] = [
      {
        original: [[0]],
        rotated: [[0]],
      },
      {
        original: [
          [1, 2],
          [3, 4],
        ],
        rotated: [
          [3, 1],
          [4, 2],
        ],
      },
      {
        original: [
          [1, 2, 3],
          [4, 5, 6],
          [7, 8, 9],
        ],
        rotated: [
          [7, 4, 1],
          [8, 5, 2],
          [9, 6, 3],
        ],
      },
      {
        original: [
          [1, 2, 3, 4],
          [5, 6, 7, 8],
          [9, 10, 11, 12],
          [13, 14, 15, 16],
        ],
        rotated: [
          [13, 9, 5, 1],
          [14, 10, 6, 2],
          [15, 11, 7, 3],
          [16, 12, 8, 4],
        ],
      },
    ];

    inputs.forEach((args) => {
      test(`should rotate matrix clockwise:`, () => {
        expect(func(args.original)).toEqual(args.rotated);
      });
    });
  });
}
