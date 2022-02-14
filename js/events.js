function colorTwo() {
  document.body.style.backgroundColor = "#dcff83";
}

// event handling assigning function name to onclick
const thirdColor = document.getElementById("third-color");
function colorThree() {
  document.body.style.backgroundColor = "#fdffb6";
}
thirdColor.onclick = colorThree;

const fourthColor = document.getElementById("fourth-color");
// fourthColor.onclick = function colorFour(){
fourthColor.onclick = function colorFour() {
  // anonymous function
  document.body.style.backgroundColor = "#ffc7ff";
};

const fifthColor = document.getElementById("fifth-color");
fifthColor.addEventListener("click", fifthButton);

function fifthButton() {
  document.body.style.backgroundColor = "#f4ff4d";
}

const sixthColor = document.getElementById("sixth-color");
sixthColor.addEventListener("click", function () {
  document.body.style.backgroundColor = "lightblue";
});

document.getElementById("seventh-color").addEventListener("click", function () {
  document.body.style.backgroundColor = "lightcoral";
});

// add event using function
function eventHandling() {
  const addEvent = document.getElementById("para-one");
  addEvent.innerText = "This is the event text after clicking button";
}

// add event using direct shortcut
document.getElementById("add-event").addEventListener("click", function () {
  const p = document.getElementById("para-one");
  p.innerText = "Direct shortcut method of adding event";
});
