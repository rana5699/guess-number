const userNumber = document.getElementById("user-number");
const restartButton = document.getElementById("restart-button");
const numberIs = document.getElementById("number-is");
const attemptOver = document.getElementById("attempt-over");
const inputForm = document.getElementById("input-form");
const submitButton = document.getElementById("submit");
const winResult = document.getElementById("win-result");
const lostResult = document.getElementById("lost-result");
const attempt = document.getElementById("attempt");
const remainingAttempt = document.getElementById("remaining-attempt");
const message = document.getElementById("message");

// handle restart button
restartButton.addEventListener("click", () => {
  location.reload();
});
// handle restart button

//  showMesage START here
const showMessage = (text, state) => {
  message.innerText = text;
  message.classList.add(`bg-${state}`);
  setTimeout(() => {
    message.classList.remove(`bg-${state}`);
    message.innerText = "";
  }, 1000);
};
//  showMesage END here

// All initial values
let win = 0;
let lost = 0;
let totalAttempt = 10;
let attemptIs = 0;
// All initial values

// form handelar START here
inputForm.addEventListener("submit", (e) => {
  e.preventDefault();

  //   input value collect and input field clear
  const inputNumber = document.getElementById("number").value;
  document.getElementById("number").value = "";
  //   input value collect and input field clear

  //   validation empty field
  if (inputNumber === "") {
    attemptOver.innerText = " Please input 1 to 5 numbers";
    return;
  }
  //   validation empty field

  //   increase initial value and set textContent
  totalAttempt--;
  attemptIs++;
  attempt.textContent = attemptIs;
  remainingAttempt.textContent = totalAttempt;
  //   increase initial value and set textContent

  const secreateNumber = Math.floor(Math.random() * 6) + 1; //   create random number

  //   set user number and random number
  userNumber.textContent = inputNumber;
  numberIs.textContent = secreateNumber;
  //   set user number and random number

  //   increase and set win and lost result START here
  if (inputNumber == secreateNumber) {
    win++;
    winResult.textContent = win;
    showMessage("Congratulations ! You Win", "win");
  } else {
    lost++;
    lostResult.textContent = lost;
    showMessage("Your guess number is wrong ! try again", "lost");
  }
  //   increase and set win and lost result END here

  //   total 10 attempts limit check and show message START here
  if (totalAttempt === 0) {
    submitButton.setAttribute("disabled", "disabled");
    attemptOver.innerText = "Game over! You have used all attempts.";
    return;
  }
  //   total 10 attempts limit check and show message START here
});
// form handelar END here
