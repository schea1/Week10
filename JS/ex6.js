// Logic
// - Add event listener for clicking the button
// - Prompt the user for a dessert
// - Create a line item with the dessert name
// - Add the dessert to the UL

// Code
// Commented out for Method 2 below (this code plus the event listener on the li)
// document.getElementById("addButton").addEventListener("click", e => {
//   const dessertName = prompt("Enter a dessert");
//   // For testing, hard code
//   //const dessertName = "Ice Cream";

//   // Create a li with the dessert
//   const liElement = document.createElement("li");
//   liElement.textContent = dessertName;

//   // Add to the UL (get and add in one step)
//   document.getElementById("desserts").appendChild(liElement);
// })

// BONUS - Change Dessert Name

// METHOD 1
// Listen for clicking on the UL, and change the LI text
// document.getElementById("desserts").addEventListener("click", e => {
//   // Test
//   //console.log(`Element target: ${e.target}, element text: ${e.target.textContent}`);
  
//   // Ask the user for a new dessert name
//   // Modify existing dessert text
//   const newDessertName = prompt("Enter a new dessert name");
//   e.target.textContent = newDessertName;
// })

// METHOD 2
// Add the event listener to each LI prior to adding it to the page
// Comment out above code and re-code below

document.getElementById("addButton").addEventListener("click", e => {
  const dessertName = prompt("Enter a dessert");
  // For testing, hard code
  //const dessertName = "Ice Cream";

  // Create a li with the dessert
  const liElement = document.createElement("li");
  liElement.textContent = dessertName;
  // Add an event listener to the liElement to change the text content
  liElement.addEventListener("click", () => {
    // Prompt for new dessert
    const newDessertName = prompt("Enter new dessert name");
    liElement.textContent = newDessertName;
  })

  // Add to the UL (get and add in one step)
  document.getElementById("desserts").appendChild(liElement);
})