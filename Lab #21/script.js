// ======================= [ Task #1 ] =======================
const cars = document.querySelectorAll(".car");

cars.forEach((car) => {
  car.addEventListener("dragstart", dragStart);
  car.addEventListener("dragend", dragEnd);

  function dragStart(e) {
    e.dataTransfer.setData("text/plain", e.target.id);
    setTimeout(() => {
      this.style.opacity = "0.4";
    }, 0);
  }

  function dragEnd(e) {
    this.style.opacity = "1";
  }
});

const box = document.querySelector(".road");

box.addEventListener("dragenter", dragEnter);
box.addEventListener("dragover", dragOver);
box.addEventListener("dragleave", dragLeave);
box.addEventListener("drop", drop);

function dragEnter(e) {
  console.log("drag enter");
  e.preventDefault();
  e.target.classList.add("drag-over");
}

function dragOver(e) {
  console.log("drag over");

  e.preventDefault();
  e.target.classList.add("drag-over");
}

function dragLeave(e) {
  console.log("drag leave");

  e.target.classList.remove("drag-over");
}

function drop(e) {
  const road = document.querySelector(".road");
  road.style.pointerEvents = "none";
  const car = document.querySelector(".road .block");
  car.classList.remove("notransition");

  e.target.classList.remove("drag-over");
  e.stopPropagation();
  e.preventDefault();

  let url = e.dataTransfer.getData("text/plain");
  const image = document.createElement("img");
  image.src = url;
  image.width = 250;

  car.appendChild(image);
  play();
  setTimeout(() => {
    car.classList.add("notransition");
    car.removeChild(car.lastElementChild);
    car.style.left = "0";
    road.style.pointerEvents = "all";
  }, 2500);
}

function play() {
  const car = document.querySelector(".block");
  car.style.left = "calc(100% - 250px)";
}
// ===========================================================

// ======================= [ Task #2 ] =======================
const setRis = (digit, image) => {
  switch (digit) {
    case 0: {
      return (image.src = "./images/numbers/0.jpg");
    }
    case 1: {
      return (image.src = "./images/numbers/1.jpg");
    }
    case 2: {
      return (image.src = "./images/numbers/2.jpg");
    }
    case 3: {
      return (image.src = "./images/numbers/3.jpg");
    }
    case 4: {
      return (image.src = "./images/numbers/4.jpg");
    }
    case 5: {
      return (image.src = "./images/numbers/5.jpg");
    }
    case 6: {
      return (image.src = "./images/numbers/6.jpg");
    }
    case 7: {
      return (image.src = "./images/numbers/7.jpg");
    }
    case 8: {
      return (image.src = "./images/numbers/8.jpg");
    }
    case 9: {
      return (image.src = "./images/numbers/9.jpg");
    }
  }
};

const getFirstNumber = (number) => {
  return Math.floor((number / 10) % 10);
};

const getSecondNumber = (number) => {
  return Math.floor(number % 10);
};

const clockTick = () => {
  const hoursImage = document.querySelectorAll(".hours img");
  const minutesImage = document.querySelectorAll(".minutes img");
  const secondsImage = document.querySelectorAll(".seconds img");

  const today = new Date();
  const hours = today.getHours();
  const minutes = today.getMinutes();
  const seconds = today.getSeconds();
  console.log(`${hours}:${minutes}.${seconds}`);

  // Changing pictures for hours
  setRis(getFirstNumber(hours), hoursImage[0]);
  setRis(getSecondNumber(hours), hoursImage[1]);

  // Changing pictures for minutes
  setRis(getFirstNumber(minutes), minutesImage[0]);
  setRis(getSecondNumber(minutes), minutesImage[1]);

  // Changing pictures for seconds
  setRis(getFirstNumber(seconds), secondsImage[0]);
  setRis(getSecondNumber(seconds), secondsImage[1]);
};

setInterval(clockTick, 1000);
// ===========================================================
