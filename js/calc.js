var onScreen = document.getElementById("screen");
//get number buttons and call the function numClick
var buttonNum = document.getElementsByClassName("buttonNum");
for (var i = 0; i < buttonNum.length; i++) {
  buttonNum[i].addEventListener("click", numClick);
}
//get AC button and call function buttonClear
var clearScreen = document.getElementsByClassName("buttonClear");
clearScreen[0].addEventListener("click", buttonClear);

//get the operator symbol and call the function passOperator
var symbol = document.getElementsByClassName("operator");
for (var i = 0; i < symbol.length; i++) {
  symbol[i].addEventListener("click", passOperator);
}
//setup equals button with event listnenr and function
var equals = document.getElementsByClassName("equals");
equals[0].addEventListener("click", doMaths);

//variable which will eventually contain the correct anwser
var calculation = 0;


function numClick() {
  //get input from button
  var data = this.innerHTML;
  //update screen
  onScreen.innerHTML= onScreen.innerHTML + data;

  calculation = onScreen;
  return calculation;

}

function buttonClear(){
  console.log(onScreen.innerHTML= "");
}

function passOperator(){
  var data = this.innerHTML;
  onScreen.innerHTML= onScreen.innerHTML + data;
}

function doMaths(){
  onScreen.innerHTML = eval(calculation.innerHTML);
}
