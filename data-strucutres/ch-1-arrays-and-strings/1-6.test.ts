import { describe, expect, test } from "vitest";
import * as funcs from "./1-6";

for (let key in funcs) {
  let func = funcs[key];

  describe(`String Compression: ${key}`, () => {
    ["", "a", "aa", "abc", "aabbcc", "ababababccab"].forEach((args) => {
      test(`should return original string when compression does not take less space: '${args}'`, () => {
        expect(func(args)).toEqual(args);
      });
    });

    const inputs: { arg: string; out: string }[] = [
      { arg: "aaa", out: "a3" },
      { arg: "bbbbbb", out: "b6" },
      { arg: "abbbbbbc", out: "a1b6c1" },
      { arg: "aaabccc", out: "a3b1c3" },
      { arg: "hhellllllllooooo!", out: "h2e1l8o5!1" },
      { arg: "woorrrllllddddd", out: "w1o2r3l4d5" },
    ];
    inputs.forEach((args) => {
      test(`should return compressed string '${args.out}' with string '${args.arg}'`, () => {
        expect(func(args.arg)).toEqual(args.out);
      });
    });
  });
}
