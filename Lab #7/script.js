// ============================== [ Task #1 ] ==============================
const today = () => {
  const today = new Date();

  const date = `${today.getDate()}-${
    today.getMonth() + 1
  }-${today.getFullYear()}`;

  const time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;

  alert(`Current date: ${date}\nCurrent time: ${time}`);
};

const yesterday = () => {
  const today = new Date(new Date().getTime() - 24 * 60 * 60 * 1000);

  const date = `${today.getDate()}-${
    today.getMonth() + 1
  }-${today.getFullYear()}`;

  const time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;

  alert(`Yesterday date: ${date}\nYesterday time: ${time}`);
};

const yearsAgo = () => {
  const today = new Date(new Date().getTime() - 10 * 365 * 24 * 60 * 60 * 1000);

  const date = `${today.getDate()}-${
    today.getMonth() + 1
  }-${today.getFullYear()}`;

  const time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;

  alert(`10 years ago date: ${date}\n10 years ago time: ${time}`);
};

const weekLater = () => {
  const today = new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000);

  const date = `${today.getDate()}-${
    today.getMonth() + 1
  }-${today.getFullYear()}`;

  const time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;

  alert(`Week later date: ${date}\nWeek later time: ${time}`);
};
// =========================================================================

// ============================== [ Task #2 ] ==============================
const secondsLeft = () => {
  const today = new Date();
  const hours = today.getHours();
  const minutes = today.getMinutes();
  const seconds = today.getSeconds();
  const secondsUntilEndOfDate =
    24 * 60 * 60 - hours * 60 * 60 - minutes * 60 - seconds;
  alert(secondsUntilEndOfDate);
};
// =========================================================================

// ============================== [ Task #3 ] ==============================
const inputArea = document.getElementById("input-text");
const outputArea = document.getElementById("output-text");

const swapWords = () => {
  const inputString = inputArea.value;
  let tmpArray = inputString.split(" ");
  const lastWord = tmpArray.length - 1;
  [tmpArray[0], tmpArray[lastWord]] = [tmpArray[lastWord], tmpArray[0]];

  outputArea.value = tmpArray.join(" ");
};
// =========================================================================

// ============================== [ Task #4 ] ==============================
const reverseInputArea = document.getElementById("reverse-input-text");
const reverseOutputArea = document.getElementById("reverse-output-text");

const reverseWords = () => {
  const inputString = reverseInputArea.value;
  let tmpArray = inputString
    .split(" ")
    .map((item) => item.split("").reverse().join(""));

  reverseOutputArea.value = tmpArray.join(" ");
};
// =========================================================================

// ============================== [ Task #5 ] ==============================
const phoneNumberArea = document.getElementById("phone-number-input");
const areaCodeArea = document.getElementById("area-code-input");
const numbersArea = document.getElementById("number-input");

const splitNumber = () => {
  if (phoneNumberArea.value === "") alert("You didn't enter the phone number!");
  else if (phoneNumberArea.value[0] !== "(") alert("Incorrect type of number");
  else {
    const inputString = phoneNumberArea.value;
    let tmpArray = inputString.split(" ");
    areaCodeArea.value = tmpArray[0]
      .split("")
      .filter((item) => !isNaN(item))
      .join("");
    numbersArea.value = tmpArray[1];
  }
};
// =========================================================================

// ============================== [ Task #6 ] ==============================
const textArea = document.getElementById("text-field");
const searchLetterArea = document.getElementById("search-input");
const characterCounter = document.getElementById("result-span");

const search = () => {
  const letter = searchLetterArea.value;
  const string = textArea.value.toLowerCase();

  const count = string
    .split("")
    .map((i) => !!~i.indexOf(letter))
    .filter((i) => i).length;

  characterCounter.textContent = `${
    count === 0
      ? "Characters not"
      : count > 1
      ? `${count} characters were`
      : `${count} character was`
  } found`;
};
// =========================================================================
