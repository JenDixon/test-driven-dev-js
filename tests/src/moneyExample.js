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
  return new Money(this.amt + addend.amt, this.currency);
};
Money.prototype.equals = function (denomType) {
  return this.amt === new denomType(this.amt);
};

//Define the dollar class
function dollar(amt) {
  //Call the parent constructor
  //Money.call(this, amt);
  //this.currency = currency;
  return new Money(amt, 'USD');
}

//Extend the money class
//Dollar.prototype = Object.create(Money.prototype);

//ALT METHOD
//Dollar.prototype = new Money();
//Dollar.prototype.constructor = Dollar;

//dollar factory
//var dollarFactory = function(amt) {
  //return new Dollar(amt, 'USD');
  //return dollar(amt, 'USD');
//};


//Define the franc class
function franc(amt) {
  //Call the parent constructor
  //Money.call(this, amt);
  //this.currency = currency;
  return new Money(amt, 'CHF');
}

//Extend the Money class
//Franc.prototype = Object.create(Money.prototype);

//ALT METHOD
//Franc.prototype = new Money();
//Franc.prototype.constructor = Franc;

//franc factory
//var francFactory = function(amt) {
//  return franc(amt, 'CHF');
//};


//var testMultiplication = function(multiplier) {
//  var five = dollar(5);
//  return five.times(multiplier);
//};

var equalityTest = function(moneyDenom, moneyDenomAlt) {
  var moneyOne = moneyDenom;
  var moneyTwo = moneyDenomAlt;
  return moneyOne.amt === moneyTwo.amt;
};



