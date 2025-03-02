import { describe, expect, test } from "vitest";
import * as funcs from "./1-3";

for (let key in funcs) {
  const func = funcs[key];

  describe(`URLify: ${key}`, () => {
    const strs = [
      "Mr John Smith    ",
      "nospaces",
      " firstSpace",
      "lastSpace ",
      "  surroundedBySpaces  ",
      "middle  spaces",
      " l o t s   o f   s p a c e ",
      "http://www.google.com/",
      "http://www.google.com/search?q=something really really funny",
    ];
    const inputs: [string, number][] = strs.map((str) => [
      str,
      str.trimEnd().length,
    ]);
    inputs.forEach((args: [string, number]) => {
      test(`should replace all spaces with '%20' for string: '${args[0]}'`, () => {
        const expected = args[0].trimEnd().replaceAll(/ /g, "%20");
        expect(func(args[0].split(""), args[1])).toEqual(expected);
      });
    });
  });
}
