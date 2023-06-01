import { describe, it, expect, to, assert } from "vitest";
import { addTwoNumbers, multiplayTwoNumbers } from "../practice";

describe("Testing addSumTwoNumbers", () => {
  it("should add two positive numbers", () => {
    expect(addTwoNumbers(1, 2)).toEqual(3);
  });

  it("should add two negative numbers", () => {
    expect(addTwoNumbers(1, -12)).toEqual(-1);
  });
});

describe("Testing multiplayTwoNumbers", () => {
  it("should multiply two positive numbers", () => {
    expect(multiplayTwoNumbers(1, 2)).toEqual(2);
  });

  it("should multiply two negative numbers", () => {
    expect(multiplayTwoNumbers(1, -2)).toEqual(-1);
  });
});

//npx test
