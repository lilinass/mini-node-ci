// _tests_/calc.test.js
const { calc } = require("../src/calc");

describe("calc", () => {
  test("add/sub/mul work", () => {
    expect(calc.add(2, 3)).toBe(5);
    expect(calc.sub(7, 4)).toBe(3);
    expect(calc.mul(3, 4)).toBe(12);
  });

  test("div works", () => {
    expect(calc.div(12, 3)).toBe(4);
  });

  test("div by zero throws", () => {
    expect(() => calc.div(1, 0)).toThrow(RangeError);
  });
});
