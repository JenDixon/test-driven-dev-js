/**
 * Created by jdixon on 4/12/14.
 */

//TODO: $5 * 2 = 10 - DONE
//TODO: Money side effects? - DONE
//TODO: equals() - DONE
//TODO: Make “amount” private - DONE
//TODO: 5 CHF * 2 = 10 CHF - DONE
//TODO: Common equals - DONE
//TODO: Compare Francs with Dollars - DONE
//TODO: Currency - DONE
//TODO: Common times - DONE
//TODO: Dollar/Franc duplication - DONE
//TODO: Delete testFrancMultiplication? - DONE


//TODO: $5 + 10 CHF = $10 if rate is 2:1
//TODO: Money rounding?
//TODO: hashCode()
//TODO: Equals null
//TODO: Equals object



function Money(amt, currency) {
  this.amt = amt;
  this.currency = currency;
}
Money.prototype.getAmt = function () {
  return this.amt;
};
Money.prototype.getCurrency = function () {
  return this.currency;
};
Money.prototype.times = function (multiplier) {
  return new Money(this.amt *= multiplier, this.currency);
};
Money.prototype.plus = function (addend) {
  return new Sum(this, addend);
};
Money.prototype.equals = function (denomType) {
  return this.amt === new denomType(this.amt);
};

//Define the dollar class
function dollar(amt) {
  return new Money(amt, 'USD');
}

//Define the franc class
function franc(amt) {
  return new Money(amt, 'CHF');
}


function Bank() {}

Bank.prototype.reduce = function (source, to) {
  var sum = source;
  var amount = sum.augend.amt + sum.addend.amt;
  return new Money(amount, to);
};


function Sum(augend, addend) {
  this.augend = augend;
  this.addend = addend;
}

Sum.prototype.sum = function (augend, addend) {
  return new Sum (this.augend, this.addend);
};

var equalityTest = function (moneyDenom, moneyDenomAlt) {
  var moneyOne = moneyDenom, moneyTwo = moneyDenomAlt;
  return moneyOne.amt === moneyTwo.amt;
};

var testReduceSum = function () {
  var sum = new Sum(dollar(3), dollar(4));
  var bank = new Bank();
  var result = bank.reduce(sum, 'USD');
  return result;
};