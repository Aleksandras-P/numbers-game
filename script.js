const gamePage = document.getElementById("gamePage");
const wrongAnswerDiv = document.getElementById("wrongAnswer");
const higherOrLowerSpan = document.getElementById("higherOrLowerNumber");
const heading = document.getElementById("heading");
const numberInput = document.getElementById("numberInput");
const submitBtn = document.getElementById("submitBtn");
const victoryPage = document.getElementById("victoryPage");
const tryCountSpan = document.getElementById("tryCount");
const playAgainBtn = document.getElementById("playAgainBtn");
const number = Math.floor(Math.random() * 100) + 1;
let tryCount = 0;

numberInput.addEventListener("input", () => {
  checkInput();
});

submitBtn.addEventListener("click", () => {
  tryCount += 1;
  checkInputValue();
});

playAgainBtn.addEventListener("click", () => {
  window.location.reload(true);
});

function checkInput() {
  const inputValue = numberInput.value;

  if (!inputValue) {
    submitBtn.disabled = true;
    submitBtn.style.cursor = "default";
    submitBtn.style.backgroundColor = "rgba(255, 255, 255, 1)";
    submitBtn.style.opacity = "0.6";
  } else {
    submitBtn.disabled = false;
    submitBtn.style.cursor = "pointer";
    submitBtn.style.backgroundColor = "";
    submitBtn.style.opacity = "1";
  }
}

function higherOrLower() {
  const inputValue = Number(numberInput.value);

  if (inputValue < number) {
    higherOrLowerSpan.textContent = "Didesnį";
  } else if (inputValue > number) {
    higherOrLowerSpan.textContent = "Mažesnį";
  } else return;
}

function checkInputValue() {
  const inputValue = Number(numberInput.value);

  if (inputValue != number) {
    higherOrLower();
    heading.style.fontSize = "36px";
    wrongAnswerDiv.style.display = "flex";
  } else if (inputValue === number) {
    heading.style.fontSize = "80px";
    gamePage.style.display = "none";
    victoryPage.style.display = "block";
    tryCountSpan.textContent = `${tryCount}`;
  } else return;
}
checkInput();
