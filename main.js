const tick = 1 * 1000;

let secondsLeft = 3;
let displayEl = document.querySelector("h1");

updateDisplay(secondsLeft);

const btn = document.querySelector("#resetTimer")
let intervalID = window.setInterval(subtractFromCountdown, tick)

btn.addEventListener("click", function handleResetClick(event) {
  console.log(secondsLeft);
  secondsLeft = 3;
  updateDisplay(secondsLeft);
  let body = document.querySelector("body")
  body.style.backgroundColor = "white";
  body.style.color = "black";
});

function updateDisplay(msg) {
  displayEl.innerHTML = msg
}

function subtractFromCountdown() {
  secondsLeft -= 1;
  updateDisplay(secondsLeft);

  if (secondsLeft === 0) {
    window.clearInterval(intervalID);
    let body = document.querySelector("body")
    body.style.backgroundColor = "red";
    body.style.color = "white";
    updateDisplay("💥 Boom 💥");
  }
}
