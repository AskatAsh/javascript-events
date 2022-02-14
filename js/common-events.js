function justByClicking() {
  const p = document.getElementById("clicking-method");
  p.innerText = "Adding text in a paragraph by using function event handling";
}

document.getElementById("handle-event").addEventListener("click", function () {
  const para = document.getElementById("clicking-method");
  para.innerText = "Event handling by adding text using shortcut eventListener";
});

document.getElementById("update-name").addEventListener("click", function () {
  const nameField = document.getElementById("name-field");

  const p = document.getElementById("clicking-method");
  p.innerText = nameField.value;
  nameField.value = "";
  // console.log(nameField.value);
});
