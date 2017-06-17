/*jshint esversion: 6 */
const calc = window.calculator;
var image = document.getElementById("display");
var total = 0;
var balance = 0;
var operation = null;
var storedNumber;


function clearData(){
    return image.innerHTML = "";
  }

window.cashRegister = (function(){

function meow(operation){

    switch(operation){

      case 'add':
         balance = calc.add(storedNumber);
        break;


      case 'subtract':
        balance = calc.subtract(storedNumber);
        break;

      case 'multiply':
        balance = calc.multiply(storedNumber);
        break;

      case 'divide':
        balance = calc.divide(storedNumber);
      }

       return balance;


}

  function loading(x) {
    total = calc.load(parseFloat(x));
    console.log(total);
  }

  function getTotal() {
    return calc.getTotal();
  }

  function getBalance() {
    return balance;
  }

  function depositCash(x) {
    if(x > 0) {
      return balance += parseFloat(x);
    }
  }

  function withdrawCash(x) {
    return balance -= parseFloat(x);
  }

  return {
    getTotal : getTotal,
    loading : loading,
    meow : meow,
    getBalance : getBalance,
    depositCash : depositCash,
    withdrawCash : withdrawCash

  };
})();

console.log(total);

const restart = document.getElementById("clear");
      restart.addEventListener("click", function(){
        image.innerHTML = "";
      });
const num1 = document.getElementById("button1");
      num1.addEventListener("click", function(){
        storedNumber = image.innerHTML += "1";
      });
const num2 = document.getElementById("button2");
      num2.addEventListener("click", function(){
        storedNumber = image.innerHTML += "2";
      });
const num3 = document.getElementById("button3");
      num3.addEventListener("click", function(){
        storedNumber = image.innerHTML += "3";
      });
const num4 = document.getElementById("button4");
      num4.addEventListener("click", function(){
        storedNumber = image.innerHTML += "4";
      });
const num5 = document.getElementById("button5");
      num5.addEventListener("click", function(){
        storedNumber = image.innerHTML += "5";
      });
const num6 = document.getElementById("button6");
      num6.addEventListener("click", function(){
        storedNumber = image.innerHTML += "6";
      });
const num7 = document.getElementById("button7");
      num7.addEventListener("click", function(){
        storedNumber = image.innerHTML += "7";
      });
const num8 = document.getElementById("button8");
      num8.addEventListener("click", function(){
        storedNumber = image.innerHTML += "8";
      });
const num9 = document.getElementById("button9");
      num9.addEventListener("click", function(){
        storedNumber = image.innerHTML += "9";
      });
const num0 = document.getElementById("button0");
      num0.addEventListener("click", function(){
        storedNumber = image.innerHTML += "0";
      });
const num00 = document.getElementById("button00");
      num00.addEventListener("click", function(){
        storedNumber = image.innerHTML += "00";
      });
const num = document.getElementById("button");
      num.addEventListener("click", function(){
        storedNumber = image.innerHTML += ".";
      });

var conquer = document.getElementById("divide");
    conquer.addEventListener('click',function(){
    operation = "divide";
    cashRegister.loading(storedNumber);
    clearData();
  });

var reproduce = document.getElementById("multiply");
    reproduce.addEventListener('click',function(){
    operation = "multiply";
    cashRegister.loading(storedNumber);
    clearData();
  });

var negative = document.getElementById("subtract");
    negative.addEventListener('click',function(){
    operation = "subtract";
    cashRegister.loading(storedNumber);
    clearData();
  });

var positive = document.getElementById("add");
    positive.addEventListener('click',function(){
    operation = "add";
    cashRegister.loading(storedNumber);
    clearData();
  });

var transform = document.getElementById("equal");
    transform.addEventListener('click',function(){
    cashRegister.meow(operation);
    console.log("equal:", cashRegister.meow(operation));

  });
