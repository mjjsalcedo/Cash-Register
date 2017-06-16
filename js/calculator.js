
var Calculator = function() {

var display = 0;

  function clear(){
    display = 0;
    return display;
  }

  function getBalance(){
    return display;
  }

  function depositCash(x){
    display += x;
  }

  return{

    restart: clear,
    status: getBalance,
    add: depositCash,
  };
}();

