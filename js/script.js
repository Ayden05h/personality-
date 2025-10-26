console.log("script.js connected!");
console.log("script.js connected!");

// Select all question blocks and answer buttons
const questionBlocks = document.querySelectorAll('.question-block');
const answerButtons = document.querySelectorAll('.answer-btn');
const showResultBtn = document.getElementById('show-result');
const resultContainer = document.getElementById('result-container');
const resultText = document.getElementById('result-text');

// Object to track user's answers
const userAnswers = {};

// Correct answers for each question (in order)
const correctAnswers = ["C", "D", "B", "C", "D"]; 
// 1. Batman  2. Superman  3. Spiderman  4. Ironman  5. Mister Fantastic

// Track selected answers visually and store them
questionBlocks.forEach((block, index) => {
  const buttons = block.querySelectorAll('.answer-btn');
  
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove highlight from all buttons in this question
      buttons.forEach(btn => btn.classList.remove('selected', 'btn-primary'));
      buttons.forEach(btn => btn.classList.add('btn-outline-primary'));

      // Highlight the clicked one
      button.classList.remove('btn-outline-primary');
      button.classList.add('btn-primary', 'selected');

      // Save the user's answer
      userAnswers[index] = button.dataset.answer;
      console.log(`Question ${index + 1} answer: ${button.dataset.answer}`);
    });
  });
});

// Calculate and display result
showResultBtn.addEventListener('click', () => {
  let score = 0;

  // Compare user answers to correct answers
  for (let i = 0; i < correctAnswers.length; i++) {
    if (userAnswers[i] === correctAnswers[i]) {
      score++;
    }
  }

  // Determine result message
  let resultMessage = "";
  if (score === 5) {
    resultMessage = "You're basically a superhero encyclopedia! 🧠💥";
  } else if (score >= 3) {
    resultMessage = "Nice work! You definitely know your heroes. 🦸";
  } else {
    resultMessage = "You might need to rewatch some Marvel and DC movies! 🎬😅";
  }

  // Show result
  resultText.textContent = `${resultMessage} You scored ${score} out of 5.`;
  resultContainer.style.display = "block";

  console.log("Final Score:", score);
});
