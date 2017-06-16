/*jshint esversion: 6 */

const calc = window.calculator;

var image = document.getElementById("display");
var operation = null;
var storedNumber = image.innerHTML;
var balance = 0;

function transactions(){


var memory = 0;
var balance = 0;

   return {

      clearMemory: clearMemory,
      getBalance: getBalance,
      depositCash: depositCash,
      withdrawCas: withdrawCash,
    };

   function clearMemory(){
      memory = 0;
   }

   function saveMemory(){
      storedNumber = balance;
   }

   function getBalance(x){
      return balance;
   }


}

const restart = document.getElementById("clear");
      restart.addEventListener("click", function(){
        image.innerHTML = "";
      });

const num1 = document.getElementById("button1");
      num1.addEventListener("click", function(){
        image.innerHTML += "1";
      });
const num2 = document.getElementById("button2");
      num2.addEventListener("click", function(){
        image.innerHTML += "2";
      });
const num3 = document.getElementById("button3");
      num3.addEventListener("click", function(){
        image.innerHTML += "3";
      });
const num4 = document.getElementById("button4");
      num4.addEventListener("click", function(){
        image.innerHTML += "4";
      });
const num5 = document.getElementById("button5");
      num5.addEventListener("click", function(){
        image.innerHTML += "5";
      });
const num6 = document.getElementById("button6");
      num6.addEventListener("click", function(){
        image.innerHTML += "6";
      });
const num7 = document.getElementById("button7");
      num7.addEventListener("click", function(){
        image.innerHTML += "7";
      });
const num8 = document.getElementById("button8");
      num8.addEventListener("click", function(){
        image.innerHTML += "8";
      });
const num9 = document.getElementById("button9");
      num9.addEventListener("click", function(){
        image.innerHTML += "9";
      });
const num0 = document.getElementById("button0");
      num0.addEventListener("click", function(){
        image.innerHTML += "0";
      });
const num00 = document.getElementById("button00");
      num00.addEventListener("click", function(){
        image.innerHTML += "00";
      });
const num = document.getElementById("button");
      num.addEventListener("click", function(){
        image.innerHTML += ".";
      });


const division = document.getElementById("divide");
      division.addEventListener("click", function(){
        image.innerHTML += "";
      });
const multiplication = document.getElementById("multiply");
      multiplication.addEventListener("click", function(){
        image.innerHTML += "";
      });
const adding = document.getElementById("add");
      adding.addEventListener("click", function(){
        image.innerHTML += "";
      });
const subtracting = document.getElementById("subtract");
      subtracting.addEventListener("click", function(){
        image.innerHTML += "";
      });

const equaling = document.getElementById("equal");
      equaling.addEventListener("click", function(){
        image.innerHTML += "";
      });

window.calculator = (function() {

var conquer = document.getElementById("divide");
    conquer.addEventListener('click',function(){
    calc.divide(parseFloat(image.innerHTML));
    operation = "divide";
  });

var reproduce = document.getElementById("multiply");
    reproduce.addEventListener('click',function(){
    calc.multiply(parseFloat(image.innerHTML));
    operation = "multiply";
  });

var negative = document.getElementById("subtract");
    negative.addEventListener('click',function(){
    calc.subtract(parseFloat(image.innerHTML));
    operation = "subtract";
  });

var positive = document.getElementById("add");
    positive.addEventListener('click',function(){
    calc.add(parseFloat(image.innerHTML));
    operation = "add";
  });


var transform = document.getElementById("equal");
    transform.addEventListener('click',function(){
    storedNumber = parseFloat(image.innerHTML);
    switch(operation){

      case 'add': calc.add(storedNumber);
        break;

      case 'subtract': calc.subtract(storedNumber);
        break;

      case 'multiply': calc.multiply(storedNumber);
        break;

      case 'divide': calc.divide(storedNumber);
      }

      return calc.getTotal();
      // calculator.deleteMemory();

 /* return{
    restart: clear,
    status: getBalance,
    add: depositCash,
    subtract: withdrawCash,*/
 /* };*/

});



})();

