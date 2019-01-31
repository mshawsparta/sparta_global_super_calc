var buttonNum = document.getElementsByClassName("buttonNum");
for (var i = 0; i < buttonNum.length; i++) {
  buttonNum[i].addEventListener("click", numClick);
}

var clearScreen = document.getElementsByClassName("buttonClear");
clearScreen[0].addEventListener("click", buttonClear);

function numClick() {
// alert("on");
}
function buttonClear(){
// alert("on");
  var onScreen = document.getElementById("screen");
  console.log(onScreen.innerHTML= "");
}
