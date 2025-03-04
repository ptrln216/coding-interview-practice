import { beforeEach, describe, expect, test } from "vitest";
import { MyQueue } from "./3-4";

describe("Queue via Stacks", () => {
  let queue: MyQueue;

  beforeEach(() => {
    queue = new MyQueue();
  });

  test("should be able to enqueue and dequeue items", () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBe(3);
  });

  test("should return -1 when trying to dequeue an empty queue", () => {
    expect(queue.dequeue()).toBe(-1);
  });

  test("should be able to peek the first item of the queue", () => {
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.peek()).toBe(1);
    queue.dequeue();
    expect(queue.peek()).toBe(2);
  });

  test("should return -1 when trying to peek an empty queue", () => {
    expect(queue.peek()).toBe(-1);
  });

  test("should return true if queueu is empty", () => {
    expect(queue.isEmpty()).toBeTruthy();
  });
});
