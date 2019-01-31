var buttonNum = document.getElementsByClassName("buttonNum");
for (var i = 0; i < buttonNum.length; i++) {
  buttonNum[i].addEventListener("click", numClick);
}

var clearScreen = document.getElementsByClassName("buttonClear");
clearScreen[0].addEventListener("click", buttonClear);
var calculation = [];
function numClick() {
  var onScreen = document.getElementById("screen");
  var data = this.innerHTML;

  onScreen.innerHTML= onScreen.innerHTML + data;
  console.log(onScreen.innerHTML);

}


function buttonClear(){
// alert("on");
  var onScreen = document.getElementById("screen");
  console.log(onScreen.innerHTML= "");
}
