// Write an event listener for the form being submitted
// Get the form
const formElement = document.querySelector("form");
// Event handler for submit
formElement.addEventListener("submit", e => {
  // Prevent default behaviour so form is not sumitted
  e.preventDefault();
  // Test
  // console.log(`num1 is: ${e.target.elements.num1.value}`);
  
  // Get num1 and num2 and add them to the sum label
  const n1 = Number(e.target.elements.num1.value);
  const n2 = Number(e.target.elements.num2.value);
  document.getElementById("sum").textContent = n1 + n2;
})

// Add code to clear the sum with reset is clicked
formElement.addEventListener("reset", () => {
  document.getElementById("sum").textContent = "";
})