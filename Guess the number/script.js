let randomNumber = parseInt(Math.random() * 100 + 1);
// console.log(randomNumber);
let totalGuesses = 10;
const remainGuesses = document.querySelector("#remain_guess");
const checkGuess = document.querySelector("#btn");
let inputValue = document.querySelector("#input");
let allGuesses = document.querySelector("#guesses");
let hint = document.querySelector("#hint");
let allGuessesArr = [];

function resetState() {
  inputValue.value = "";
  allGuesses.innerText = "---";
  hint.innerText = "---";
  allGuessesArr = [];
}
remainGuesses.innerText = totalGuesses;

checkGuess.addEventListener("click", () => {
  let guessedNumber = parseInt(inputValue.value);
  if (guessedNumber === "" || isNaN(guessedNumber)) {
    alert("Enter valid input");
  } else {
    if (randomNumber === guessedNumber) {
      alert("You guessed the right number");
      totalGuesses = 10;
      remainGuesses.innerText = totalGuesses;
      resetState();
      randomNumber = parseInt(Math.random() * 100 + 1);
      console.log(randomNumber);
    } else {
      allGuessesArr.push(guessedNumber);
      allGuesses.innerText += `${guessedNumber},`;
      inputValue.value = "";
      totalGuesses--;
      remainGuesses.innerText = totalGuesses;
      if (guessedNumber > randomNumber) {
        hint.innerText = "Guessed Number Is High";
      } else {
        hint.innerText = "Guessed Number Is Low";
      }
      if (totalGuesses <= 0) {
        totalGuesses = 10;
        alert("Game Over");
        randomNumber = parseInt(Math.random() * 100 + 1);
        console.log(randomNumber);
        resetState();
        remainGuesses.innerText = totalGuesses;
      }
    }
  }
});
