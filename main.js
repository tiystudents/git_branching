const tick = 1 * 1000;

let secondsLeft = 3;
let displayEl = document.querySelector("h1");

updateDisplay(secondsLeft);

const btn = document.querySelector("#resetTimer")
let intervalID = window.setInterval(subtractFromCountdown, tick)

btn.addEventListener("click", function handleResetClick(event) {
  console.log(secondsLeft);
<<<<<<< HEAD
  // log timer before reset
  secondsLeft = 3;
=======
  //secondsLeft = 3;
>>>>>>> e77fbd785ba6e0633bddc2a5b987e149e0dad903
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
