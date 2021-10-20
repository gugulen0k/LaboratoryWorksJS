const scrollToBottom = () => {
  window.scrollTo(0, document.body.scrollHeight);
};

const scroll400Pixels = () => {
  window.scrollBy(0, 400);
};

const scrollUpTo100Pixels = () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    window.scrollTo(0, 100);
  } else {
    document.getElementById("message").classList.add("message");
    document.getElementById("message").style.opacity = "1";
    document.getElementById("message").style.animation =
      "showUp 1000ms cubic-bezier(0.19, 1, 0.22, 1) both";
  }
};

const hideMessage = () => {
  document.getElementById("message").style.animation =
    "hide 1000ms cubic-bezier(0.19, 1, 0.22, 1) both";
  setTimeout(() => {
    document.getElementById("message").style.opacity = "0";
  }, 100);
};

const makeBigger = () => {
  const button = document.getElementById("test");
  const height = button.offsetHeight;
  const width = button.offsetWidth;

  button.style.width = `${width * 2}px`;
  button.style.height = `${height * 2}px`;
};

const images = document.querySelectorAll(".image");

for (image of images) {
  image.addEventListener("click", (element) => {
    if (element.srcElement.style.transform === "scale(2)")
      element.srcElement.style.transform = "none";
    else element.srcElement.style.transform = "scale(2)";
  });
}

const colors = [
  "#2e2e2e",
  "#ff8282",
  "#a0c5a8",
  "#a0a7c5",
  "#bba0c5",
  "#c0bf9b",
  "#9bbec0",
];

const paragraph = document.getElementById("paragraph");
let i = 0;

const changeColor = () => {
  if (i > colors.length - 1) i = 0;
  paragraph.style.backgroundColor = colors[i];
  i++;
};

let interval = setInterval(changeColor, 1000);

const blocks = document.querySelectorAll(".block-close");

for (block of blocks) {
  block.addEventListener("click", (element) => {
    element.srcElement.offsetParent.style.opacity = "0";
    element.srcElement.offsetParent.style.width = "0px";
    setTimeout(() => {
      element.srcElement.offsetParent.style.display = "none";
    }, 200);
  });
}
