let userGuess = +prompt("Enter a number");
let winningNumber = 19;
if (userGuess === winningNumber) {
  console.log("Your guess is correct");
} else {
  if (userGuess > winningNumber) {
    console.log("too high!...");
  } else {
    console.log("too low!....");
  }
}
