const test_box1 = document.getElementById("test_box");
test_box1.addEventListener("click", handleClick);

function handleClick(event) {
  //const enteredDigit = parseInt(event.target.id.substring(4), 10);
  console.log(event);
  if(event.target.className=="test_box_red"){
    event.target.className = "test_box_black";
  } else {
    event.target.className = "test_box_red";
  }
}
