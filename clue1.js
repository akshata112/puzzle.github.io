// document.addEventListener('DOMContentLoaded', function() {
//     var nextButton = document.getElementById('next-button');
//     nextButton.addEventListener('click', function() {
//       // Code to show the next clue or navigate to the next page
//       // You can customize this functionality based on your requirements
//       alert("Congratulations! You found the first clue!");
//     });
//   });

document.addEventListener('DOMContentLoaded', function() {
    var answerForm = document.getElementById('answer-form');
    answerForm.addEventListener('submit', function(e) {
      e.preventDefault(); // Prevent form submission
  
      var answerInput = document.getElementById('answer-input');
      var userAnswer = answerInput.value.trim().toLowerCase();
  
      if (userAnswer === "269") {
        // Code to navigate to the next page
        alert("Congratulations! You found the correct answer!");
        window.location.href = "clue2.html"; // Replace with the URL of the next page
      } else {
        alert("Sorry, that's not the right answer. Try again!");
        answerInput.value = ''; // Clear the input field
      }
    });
  });
  