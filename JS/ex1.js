// List of questions (statement + answer)
const questions = [
  {
    statement: "2+2?",
    answer: "2+2 = 4"
  },
  {
    statement: "In which year did Christopher Columbus discover America?",
    answer: "1492"
  },
  {
    statement:
      "What occurs twice in a lifetime, but once in every year, twice in a week but never in a day?",
    answer: "The E letter"
  }
];


// Show a message when the user clicks on the button
document.getElementById("myButton").addEventListener("click", () => {
  alert("2 + 2 = 4");
});

// Show a message when the user clicks on the button
document.getElementById("myButton2").addEventListener("click", () => {
  alert("1492");
});

// Show a message when the user clicks on the button
document.getElementById("myButton3").addEventListener("click", () => {
  alert("The Letter E");
});