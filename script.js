// Generate a random number between 1 and 100
const targetNumber = Math.floor(Math.random() * 100) + 1;

// Function to check the user's guess
function checkGuess() {
    const userGuess = parseInt(document.getElementById("guess").value);
    const message = document.getElementById("message");

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        message.textContent = "Please enter a valid number between 1 and 100.";
    } else if (userGuess === targetNumber) {
        message.textContent = `Congratulations! You guessed the correct number: ${targetNumber}`;
    } else if (userGuess < targetNumber) {
        message.textContent = "Try again. The number is higher.";
    } else {
        message.textContent = "Try again. The number is lower.";
    }
}
