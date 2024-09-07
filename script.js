const test_box1 = document.getElementById("test_box");
test_box1.addEventListener("click", handleClick);

function handleClick(event) {
  //const enteredDigit = parseInt(event.target.id.substring(4), 10);
  test_box1.className = "test_box_red";
}
