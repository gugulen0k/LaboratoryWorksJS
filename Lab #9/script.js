const changeParagraph = () => {
  const text = document.getElementById("text");
  const new_text = document.createElement("div");
  const h3 = document.createElement("h3");
  h3.textContent += text.firstElementChild.textContent;
  new_text.id = text.id;
  new_text.className = text.classList;
  while (text.firstElementChild) {
    new_text.appendChild(text.firstElementChild);
  }
  new_text.firstElementChild.outerHTML = "";
  new_text.prepend(h3);
  text.replaceWith(new_text);
};

const changePage = () => {
  const page = document.getElementById("main");
  page.classList.add("fade-out");
  window.location = "./pages/second.html";
};
