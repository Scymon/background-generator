var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomBtn = document.querySelector(".random");

console.log(css);
console.log(color1);
console.log(color2);


function displayCSS() {
  css.textContent = body.style.background + ";";
}

function setGradient() {
  console.log(color1.value);
  console.log(color2.value);
  body.style.background =
  "linear-gradient(to right, "
  + color1.value
  + ", "
  + color2.value
  +")";

  displayCSS();
}

function setColor1() {
  color1.addEventListener("input", setGradient);
}

function setColor2() {
  color2.addEventListener("input", setGradient);
}

function randomize() {
  color1.value = "#"+((1<<24)*Math.random()|0).toString(16);
  color2.value = "#"+((1<<24)*Math.random()|0).toString(16);
  setGradient();
}

randomBtn.addEventListener("click", randomize);

setGradient();
setColor1();
setColor2();
displayCSS();
