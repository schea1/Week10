// Show information on a keyboard event
// Modify the below to show the key pressed
const keyboardInfo = e => {
  //console.log(`Keyboard event: ${e.type}, key: ${e.keyCode}`);
  console.log(`Keyboard event: ${e.type}, key: ${e.key}, keycode: ${e.keyCode}`);
};

// Integrate this function into key press and release:
document.addEventListener("keydown", keyboardInfo);
document.addEventListener("keyup", keyboardInfo);
