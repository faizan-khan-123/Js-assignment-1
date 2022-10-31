// *****Display*****
alert("pop up message DISPLAY");
window.alert("string")

// *****Variable*****
var myName = "faizan";
var nationality;
nationality = "Pakistani"
alert(myName);

// *****numbers*****
var weight = 130;
document.write(weight + 20);

var monthlyFee = 200;
var plusInterest = monthlyFee + 500;

document.write("<br>" + plusInterest);

var currentBalance = 200;
var remainingBalance = 100;
var totalBalance = currentBalance + remainingBalance;
document.write("<br>" + totalBalance);

// *****Operators*****
document.write(("<br>") + (2 + 2));
document.write(("<br>") + (2 - 2));
document.write(("<br>") + (2 * 2));
document.write(("<br>") + (2 / 2));
document.write(("<br>") + (2 % 2));

// *****Math Expressions****
var num = 1;
var newNum = ++num;
document.write("<br>" + newNum);

var num = 1;
var newNum = num++;
document.write("<br>" + newNum);

// ****Eliminating Ambiguity****
var totalCost = 3 + 7 * 5
document.write("<br>" + totalCost);

var totalCost = (3 + 7) * 5
document.write("<br>" + totalCost);

// ***** Concatination *****
var firstName = "Junaid ";
var lastName = "Jumshaid";
var message = "!";
var Concatination = firstName + lastName + message;
alert(Concatination);