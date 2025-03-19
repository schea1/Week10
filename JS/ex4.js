// Get HTML elements and assign to varialbes
const clickMeElement = document.getElementById("myButton");
const deactivateElement = document.getElementById("deactivate");
const clickCount = document.getElementById("clickCount");


// When someone clicks on the button, increment the count by 1
// Code Logic
// - Create event listener for clicking the button
// - Get the value in the clickCount, increment it by 1, and display on the page

// Code
// Note:
//  We will want to deactivate the increment functionality.
//  So, don't use an anonymous function.  Need to create a function for this.

// Create the increment function
const increment = () => {
 // Can pass the Event object, but not using it.
 // Test - display count
 //console.log(clickCount.textContent);
 clickCount.textContent = Number(clickCount.textContent) + 1; 
}

clickMeElement.addEventListener("click", increment);

// Deactivate
deactivateElement.addEventListener("click", () => {
  clickMeElement.removeEventListener("click", increment);
})

// Reactivate
// Let's use short syntax
document.getElementById("reactivate").addEventListener("click", () => {
  clickMeElement.addEventListener("click", increment);  
})
