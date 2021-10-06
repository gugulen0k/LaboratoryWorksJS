const clock = document.getElementById("clock");

const currentTime = () => {
  var day = new Date();
  var seconds = day.getSeconds();
  var minutes = day.getMinutes();
  var hours = day.getHours();
  clock.textContent = `${("0" + hours).substr(-2)}:${("0" + minutes).substr(
    -2
  )}:${("0" + seconds).substr(-2)}`;
};

setInterval(currentTime, 1000);

const nextPage = () => {
  const page = document.getElementById("main");
  page.classList.add("fade-out");
  window.location = "./fourth.html";
};

const previousPage = () => {
  const page = document.getElementById("main");
  page.classList.add("fade-out");
  window.location = "./second.html";
};
