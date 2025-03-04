import { beforeEach, describe, expect, test } from "vitest";
import { AnimalShelter } from "./3-6";

describe("Animal Shelter:", () => {
  let shelter: AnimalShelter;

  beforeEach(() => {
    shelter = new AnimalShelter();
  });

  test("should be able to enqueue and dequeue cats and dogs", () => {
    shelter.enqueueCat("cat");
    expect(shelter.dequeueCat()).toBe("cat");
    shelter.enqueueDog("dog");
    expect(shelter.dequeueDog()).toBe("dog");
  });

  test("should cats and dogs follow the first in first out rule when being adopted", () => {
    for (let i = 0; i < 5; ++i) {
      shelter.enqueueCat(`cat${i + 1}`);
      shelter.enqueueDog(`dog${i + 1}`);
    }
    for (let i = 0; i < 5; ++i) {
      expect(shelter.dequeueCat()).toBe(`cat${i + 1}`);
      expect(shelter.dequeueDog()).toBe(`dog${i + 1}`);
    }
  });

  test("should return message when there's no dog or cat", () => {
    expect(shelter.dequeueCat()).toBe("Sorry, cat is unavailable now.");
    expect(shelter.dequeueDog()).toBe("Sorry, dog is unavailable now.");
    expect(shelter.dequeueAny()).toBe("Sorry, no animal available now.");
  });

  test("should return available animal when there's only one type of animal", () => {
    shelter.enqueueDog("dog");
    expect(shelter.dequeueAny()).toBe("dog");
    expect(shelter.isEmpty()).toBeTruthy();
    shelter.enqueueCat("cat");
    expect(shelter.dequeueAny()).toBe("cat");
  });

  test("should return based on animals' arrival time when dequeue any", () => {
    for (let i = 0; i < 20; ++i) {
      // cat dog one by one
      if (i % 2 === 0) shelter.enqueueCat(`cat${i + 1}`);
      else shelter.enqueueDog(`dog${i + 1}`);
    }
    for (let i = 0; i < 20; ++i) {
      if (i % 2 === 0) expect(shelter.dequeueAny()).toBe(`cat${i + 1}`);
      else expect(shelter.dequeueAny()).toBe(`dog${i + 1}`);
    }
  });
});
