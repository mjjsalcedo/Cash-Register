/*jshint esversion: 6 */
(function(window){


const calc = window.calculator;
var image = document.getElementById("display");
var storage = 0;
var total = 0;
let operation = null;
let storedNumber = "";

  function storeValue( nextValue ){
    storedNumber = image.innerHTML + nextValue;
  }

  function showDisplay(){
    image.innerHTML = storedNumber;
  }

  function clearValue(){
    storedNumber = "";
  }

  function clearScreen(){
     reset = image.innerHTML = "";
     return reset;
  }

  function  getBalance(){
    storeValue(calc.getTotal());
  }


const restart = document.getElementById("clear");
      restart.addEventListener("click", function(event){
        clearScreen();
      });
const get = document.getElementById("get");
      get.addEventListener("click", function(event){
        total = getBalance();
        showDisplay();
      });
const deposit = document.getElementById("deposit");
      deposit.addEventListener("click", function(event){
        operation = "add";
        meow(operation);
        clearScreen();
      });

const withdraw = document.getElementById("withdraw");
      withdraw.addEventListener("click", function(event){
        operation = "subtract";
        meow(operation);
        clearScreen();
      });


const num1 = document.getElementById("button1");
      num1.addEventListener("click", function(event){
        storeValue("1");
        showDisplay();
      });
const num2 = document.getElementById("button2");
      num2.addEventListener("click", function(event){
        storeValue("2");
        showDisplay();
      });
const num3 = document.getElementById("button3");
      num3.addEventListener("click", function(event){
        storeValue("3");
        showDisplay();
      });
const num4 = document.getElementById("button4");
      num4.addEventListener("click", function(event){
        storeValue("4");
        showDisplay();
      });
const num5 = document.getElementById("button5");
      num5.addEventListener("click", function(event){
        storeValue("5");
        showDisplay();
      });
const num6 = document.getElementById("button6");
      num6.addEventListener("click", function(event){
        storeValue("6");
        showDisplay();
      });
const num7 = document.getElementById("button7");
      num7.addEventListener("click", function(event){
        storeValue("7");
        showDisplay();
      });
const num8 = document.getElementById("button8");
      num8.addEventListener("click", function(event){
        storeValue("8");
        showDisplay();
      });
const num9 = document.getElementById("button9");
      num9.addEventListener("click", function(event){
        storeValue("9");
        showDisplay();
      });
const num0 = document.getElementById("button0");
      num0.addEventListener("click", function(event){
        storeValue("0");
        showDisplay();
      });
const num00 = document.getElementById("button00");
      num00.addEventListener("click", function(event){
        storeValue("00");
        showDisplay();
      });
const num = document.getElementById("button");
      num.addEventListener("click", function(event){
        if( storedNumber.indexOf(".") < 0){
          storeValue(".");
        showDisplay();
        }
      });

var conquer = document.getElementById("divide");
    conquer.addEventListener('click',function(event){
    if(operation!== null){

      if( storedNumber !== "" ){
        meow(operation);
        clearScreen();
      }

    } else {

    calc.load(parseFloat(storedNumber));
    clearScreen();
  }
    operation = "divide";
  });

var reproduce = document.getElementById("multiply");
    reproduce.addEventListener('click',function(event){
    if(operation!== null){

      if( storedNumber !== "" ){
        meow(operation);
        clearScreen();
      }

    } else {

    calc.load(parseFloat(storedNumber));
    clearScreen();
  }
    operation = "multiply";
  });

var negative = document.getElementById("subtract");
    negative.addEventListener('click',function(event){

    if(operation!== null){

      if( storedNumber !== "" ){
        meow(operation);
        clearScreen();
      }

    } else {

    calc.load(parseFloat(storedNumber));
    clearScreen();
  }
    operation = "subtract";
  });

var positive = document.getElementById("add");
    positive.addEventListener('click',function(event){

    if(operation!== null){

      if( storedNumber !== "" ){
        meow(operation);
        clearScreen();
      }

    } else {

    calc.load(parseFloat(storedNumber));
    clearScreen();
  }
    operation = "add";
  });

var transform = document.getElementById("equal");
    transform.addEventListener('click',function(event){
    clearScreen();
    meow(operation);


  });

function meow(operation){

    switch(operation){

      case 'add':
         calc.add(parseFloat(storedNumber));
        break;

      case 'subtract':
        calc.subtract(parseFloat(storedNumber));
        break;

      case 'multiply':
        calc.multiply(parseFloat(storedNumber));
        break;

      case 'divide':
        calc.divide(parseFloat(storedNumber));
        break;
      default:
        throw new Error("shit doesn't work yo -_-");
      }
      console.log("calc getTotal",calc.getTotal());
      clearValue();
      storeValue(calc.getTotal());

      showDisplay();

      operation = null;

}
}(window));