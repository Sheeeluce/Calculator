const display = document.getElementById("display");


function appendToDisplay(value){
  display.value += value;
}


let memory = null

function clearDisplay(){
  memory = Number(display.value);
  display.value= "";
}

function calculate(){

  let operator;
  if (display.value.includes('+')) operator = '+'
  else if (display.value.includes('-')) operator = '-'
  else if (display.value.includes('*')) operator = '*'
  else if (display.value.includes('/')) operator = '/'


  let parts = display.value.split(operator);

  let x = Number(parts[0]);
  let y = Number(parts[1]);

  let result;

  if (operator === "+") result = (x+y);
  else if (operator === "-") result = (x-y);
  else if (operator === "*") result = (x*y);
  else if (operator === "/") result = (x/y);

  display.value = result;
}