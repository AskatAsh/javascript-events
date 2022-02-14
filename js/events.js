function colorTwo() {
  document.body.style.backgroundColor = "#e9ffb1";
}

// event handling assigning function name to onclick
const thirdColor = document.getElementById("third-color");
function colorThree() {
  document.body.style.backgroundColor = "#feffda";
}
thirdColor.onclick = colorThree;