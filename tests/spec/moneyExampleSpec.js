/**
 * Created by jdixon on 4/12/14.
 */


describe("Test Multiplication", function () {
  it("should multiply an amount by a number and receive an amount", function () {
    expect(testMultiplication(2)).toEqual(10);
  });

});

describe("Test Equality", function () {
  it("an amount should equal an amount", function () {
    expect(equalityTest(dollar(5), dollar(5))).toBe(true);
  });
});

//describe("Test Franc Multiplication", function () {
//  it("should multiply an franc amount by a number and receive an amount", function () {
//    expect(testFrancMultiplication(2)).toEqual(10);
//  });
//
//  it("should multiply an franc amount by a number and receive an amount", function () {
//    expect(testFrancMultiplication(3)).toEqual(15);
//  });
//});

describe("Test Currency", function () {
  it("test dollar currency", function () {
    expect(dollar(5).currency).toEqual('USD');
  });

  it("test frank currency", function () {
    expect(franc(5).currency).toEqual('CHF');
  });
});

describe("Test Simple Addition", function () {
  it("test simple addition", function () {
    expect(testSimpleAddition(dollar(10), reduced)).toEqual(10);
  });
});