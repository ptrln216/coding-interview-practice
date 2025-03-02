import { describe, expect, test } from "vitest";
import * as funcs from "./1-1";

for (const key in funcs) {
  const func = funcs[key];

  describe(`Is Unique: ${key}`, () => {
    [
      "abcdefghi",
      "jklpoiuqwerzxcvmnsadf",
      "1234567890",
      "AaBbCcDdeFg1234567890(*&^%$#@!)",
    ].forEach((arg) => {
      test(`should return true for unique string: '${arg}'`, () => {
        expect(func(arg)).toBeTruthy();
      });
    });

    [
      "abcadef",
      "aaaaaaaaaa",
      "abcdefghijklmnopqrstuvwxyza",
      "1234567890asdklf1",
      "!@#$%^&*()(*#($&#(*$&#*($&#()))))",
    ].forEach((arg) => {
      test(`should return false for string with dupes: '${arg}'`, () => {
        expect(func(arg)).toBeFalsy();
      });
    });
  });
}
