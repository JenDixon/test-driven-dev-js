/**
 * Created by jdixon on 4/12/14.
 */


describe("Test Multiplication", function () {
  it("should multiply an amount by a number and receive an amount", function () {
    expect(dollar(5).times(2)).toEqual(dollar(10));
  });
});

describe("Test Equality", function () {
  it("an amount should equal an amount", function () {
    expect(equalityTest(dollar(5), dollar(5))).toBe(true);
  });
});

describe("Object Return", function () {
  it("the amount of the new object should equal the amt of the original", function () {
    expect(dollar(5)).toEqual(dollar(5).times(1));
  });
});

describe("Test Currency", function () {
  it("test dollar currency", function () {
    expect(dollar(5).currency).toEqual('USD');
  });

  it("test frank currency", function () {
    expect(franc(5).currency).toEqual('CHF');
  });
});

describe("Test Addition", function () {
  it("should add an amount by a number and receive an amount", function () {
    expect(dollar(5).plus(dollar(2))).toEqual(dollar(7));
  });
});