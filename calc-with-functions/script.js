"use strict";
function zero() {
   return 0;
}
function one() {
   return 1;
}
function two() {
   return 2;
}
function three() {
   return 3;
}
function four() {
   return 4;
}
function five() {
   return 5;
}
function six() {
   return 6;
}
function seven() {
   return 7;
}
function eight() {
   return 8;
}
function nine() {
   return 9;
}

function plus(rightDigit) {
   return function (leftDigit) {
      return leftDigit + rightDigit;
   };
}
function minus(rightDigit) {
   return function (leftDigit) {
      return leftDigit - rightDigit;
   };
}
function times(rightDigit) {
   return function (leftDigit) {
      return leftDigit * rightDigit;
   };
}
function dividedBy(rightDigit) {
   return function (leftDigit) {
      return Math.floor(leftDigit / rightDigit);
   };
}

console.log(seven(times(five())));
console.log(six(dividedBy(two())));
