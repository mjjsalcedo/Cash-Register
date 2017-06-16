window.calculator = (function() {

var memory = 0;
var balance = 0;

   return {

      add: add,
      subtract: subtract,
      multiply: multiply,
      divide: divide,

    };

   function add(x){
      balance += x;
      return balan;
   }

   function subtract(x){
      balance -= x;
      return balance;
  }

   function multiply(x){
      balance *= x;
      return balance;
   }

   function divide(x){
      balance /= x;
      return balance;
   }


})();
