const swapText = () => {
  const firstTextArea = document.getElementById("first-area");
  const secondTextArea = document.getElementById("second-area");

  [firstTextArea.value, secondTextArea.value] = [
    secondTextArea.value,
    firstTextArea.value,
  ];
};

const multiplyBy2 = (number) => {
  return number ** 2;
};
const multiplyBy3 = (number) => {
  return number ** 3;
};
const multiplyBy4 = (number) => {
  return number ** 4;
};

const paragraphs = document.querySelectorAll(".paragraphs p");
paragraphs.forEach((element) => {
  element.addEventListener(
    "click",
    (event) => {
      event.target.textContent = multiplyBy2(
        parseInt(event.target.textContent)
      );
    },
    { once: true }
  );
});

const handler = (event) => {
  let counter = parseInt(event.target.dataset.counter);
  // console.log(event.target.dataset.counter);
  if (event.target.dataset.counter === "1") {
    event.target.textContent = multiplyBy2(parseInt(event.target.textContent));
    event.target.dataset.counter = counter + 1;
  } else if (event.target.dataset.counter === "2") {
    event.target.textContent = multiplyBy3(parseInt(event.target.textContent));
    event.target.dataset.counter = counter + 1;
  } else if (event.target.dataset.counter === "3") {
    event.target.textContent = multiplyBy4(parseInt(event.target.textContent));
    event.target.dataset.counter = counter + 1;
  }
  if (counter === 4) this.removeEventListener("click", handler);
};

const secondParagraphs = document.querySelectorAll(".second-paragraphs p");
secondParagraphs.forEach((element) => {
  element.addEventListener("click", handler);
});

const checkInput = (event) => {
  const length = parseInt(event.target.dataset.length);
  if (event.target.value.length < length) {
    event.target.style.borderColor = "#f1b6b6";
  } else {
    event.target.style.borderColor = "#96dd88";
  }
};
const inputs = document.querySelectorAll(".inputs input");
inputs.forEach((element) => {
  element.addEventListener("focusout", checkInput);
});

const paintRed = (item) => {
  item.style.backgroundColor = "#f1b6b6";
};
const paintGreen = (item) => {
  item.style.backgroundColor = "#96dd88";
};
const changeColor = (element, toggle) => {
  if (toggle === false) {
    element.addEventListener("click", paintRed(element), false);
    toggle = true;
  } else {
    element.removeEventListener("click", paintGreen(element), false);
    toggle = false;
  }
};

const divs = document.querySelectorAll(".divs div");
divs.forEach((element) => {
  let toggle = false;
  element.addEventListener(
    "click",
    (event) => {
      if (toggle === false) {
        event.target.addEventListener("click", paintRed(event.target), false);
        toggle = true;
      } else {
        event.target.removeEventListener(
          "click",
          paintGreen(event.target),
          false
        );
        toggle = false;
      }
    },
    false
  );
});

const yearsSelect = document.getElementById("year");
const monthsSelect = document.getElementById("month");
const daysSelect = document.getElementById("day");
const daysSelectArray = document.querySelectorAll("#day option");
const date = document.getElementById("date");
const days = Array.from(daysSelectArray);

date.textContent = `${daysSelect.value}/${monthsSelect.value}/${yearsSelect.value}`;

monthsSelect.addEventListener("change", (event) => {
  days.map((option) => (option.style.display = "block"));
  if (event.target.value === "2") {
    days.map((option) => {
      if (option.value > 28) option.style.display = "none";
    });
  } else if (event.target.value === "4") {
    days.map((option) => {
      if (option.value > 30) option.style.display = "none";
    });
  } else if (event.target.value === "6") {
    days.map((option) => {
      if (option.value > 30) option.style.display = "none";
    });
  } else if (event.target.value === "9") {
    days.map((option) => {
      if (option.value > 30) option.style.display = "none";
    });
  } else if (event.target.value === "11") {
    days.map((option) => {
      if (option.value > 30) option.style.display = "none";
    });
  }
  date.textContent = `${daysSelect.value}/${event.target.value}/${yearsSelect.value}`;
});

daysSelect.addEventListener("change", (event) => {
  date.textContent = `${event.target.value}/${monthsSelect.value}/${yearsSelect.value}`;
});
yearsSelect.addEventListener("change", (event) => {
  date.textContent = `${daysSelect.value}/${monthsSelect.value}/${event.target.value}`;
});
