// Let's start with detecting if someone presses a key
// Add event listener at the document level, event keyDown (or keypress, ...)

// Write a function to change the background colors of all the divs
// based on the color passed to it
const colorChange = (color) => {
  // Logic
  // Get all divs
  // Loop to change the background color
  const divElements = document.getElementsByTagName("div");
  // Convert to an array and loop
  Array.from(divElements).forEach(div => {
    div.style.backgroundColor = color;
  })
}

// Test our function
// colorChange("yellow");

document.addEventListener("keydown", e => {
  // Test
  // console.log(`You pressed: ${e.key}`);
  // If the key is R, G, B, or Y, we want to change the color.
  // Let's test with the switch operator
  switch (e.key.toUpperCase()) {
    case "R":
      colorChange("red");
      break;
      // Test this before adding more cases
      // Worked, let's add more cases
    case "G":
      colorChange("lightgreen");
      break;
    case "B":
      colorChange("lightblue");
      break;  
    case "Y":
      colorChange("yellow");
      break;
    // Optional default back to white
    default:
      colorChange("white");    
  }

})