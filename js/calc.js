var buttonNum = document.getElementsByClassName("buttonNum");
for (var i = 0; i < buttonNum.length; i++) {
  buttonNum[i].addEventListener("click", numClick);
}

var clearScreen = document.getElementsByClassName("buttonClear");
clearScreen[0].addEventListener("click", buttonClear);


var symbol = document.getElementsByClassName("operator");
for (var i = 0; i < symbol.length; i++) {
  symbol[i].addEventListener("click", passOperator);
}
var onScreen = document.getElementById("screen");

var equals = document.getElementsByClassName("equals");
equals[0].addEventListener("click", doMaths);
var num1 = 0;
function numClick() {
  var data = this.innerHTML;

  onScreen.innerHTML= onScreen.innerHTML + data;
  console.log(onScreen.innerHTML);
  num1 = onScreen;
  return num1;

}

function buttonClear(){
// alert("on");
  console.log(onScreen.innerHTML= "");
}

function passOperator(){
  var data = this.innerHTML;
  onScreen.innerHTML= onScreen.innerHTML + data;
}

function doMaths(){
  onScreen.innerHTML = eval(num1.innerHTML);
}

// console.log(onScreen.innerHTML);
