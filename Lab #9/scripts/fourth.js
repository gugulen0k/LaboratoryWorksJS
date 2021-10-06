const setTimer = () => {
  const time = prompt("Set time for timer (seconds)");
  const clock = document.getElementById("clock");
  if (isNaN(time)) return alert("It's not a number.\nEnter a number please.");
  else time === "" ? (clock.textContent = 0) : (clock.textContent = time);
};

const onTimesUp = () => {
  clearInterval(timerInterval);
};

const startTimer = () => {
  const timer = document.getElementById("clock");
  const buttons = document.querySelectorAll(".timer-btn");
  const timeLimit = timer.textContent;
  if (isNaN(timeLimit)) return alert("Enter a number please");
  let timeLeft = timeLimit;
  let timePassed = 0;
  let timerInterval = null;
  buttons[0].style.cssText = `pointer-events: none`;
  buttons[1].style.cssText = `pointer-events: none`;

  timerInterval = setInterval(() => {
    timePassed = timePassed += 1;
    timeLeft = timeLimit - timePassed;
    timer.textContent = timeLeft;

    if (timeLeft === 0) {
      buttons[0].style.cssText = `pointer-events: all`;
      buttons[1].style.cssText = `pointer-events: all`;
      timer.textContent = "TIME'S UP";
      clearInterval(timerInterval);
    }
  }, 1000);
};

const nextPage = () => {
  const page = document.getElementById("main");
  page.classList.add("fade-out");
  window.location = "./fifth.html";
};

const previousPage = () => {
  const page = document.getElementById("main");
  page.classList.add("fade-out");
  window.location = "./third.html";
};
