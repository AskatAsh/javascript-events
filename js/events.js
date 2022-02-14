function colorTwo() {
  document.body.style.backgroundColor = "#e9ffb1";
}

// event handling assigning function name to onclick
const thirdColor = document.getElementById("third-color");
function colorThree() {
  document.body.style.backgroundColor = "#feffda";
}
thirdColor.onclick = colorThree;


const fourthColor = document.getElementById("fourth-color");
// fourthColor.onclick = function colorFour(){
fourthColor.onclick = function colorFour() {
  // anonymous function
  document.body.style.backgroundColor = "#ffc7ff";
};
