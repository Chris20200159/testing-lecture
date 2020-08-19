const { sum, sayHello, objectMaker } = require("../functions");

describe("tests for sum function", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });

  test("sum of 1 + 3 does not equal 3", () => {
    expect(sum(1, 3)).not.toBe(3);
  });
});

describe("test for sayHello function", () => {
  test("sayHello says hello", () => {
    expect(sayHello()).toBe("hello");
  });
});

test("object assignment", () => {
  expect(objectMaker()).toEqual({ name: "cole", job: "assistant instructor" });
});

test("expect true to be truthy", () => {
  expect(true).toBeTruthy();
});
test("expect 1 to be truthy", () => {
  expect(1).toBeTruthy();
});

test("expect an empty array to be truthy", () => {
  expect([]).toBeTruthy();
});

test("expect an empty string to be falsy", () => {
  expect("").not.toBeTruthy();
});

let names = ["John", "Ariel", "Zach"];

test("Names variable contains Ariel", () => {
  expect(names).toContain("Ariel");
});
