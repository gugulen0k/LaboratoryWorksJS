const showLinks = () => {
  const links = document.getElementsByTagName("a");

  for (link of links) {
    if (link.textContent.includes("https://"))
      return alert("You already see the links");
    else link.textContent += ` | ${link.href}`;
  }
};

const nextPage = () => {
  const page = document.getElementById("main");
  page.classList.add("fade-out");
  window.location = "./third.html";
};

const previousPage = () => {
  const page = document.getElementById("main");
  page.classList.add("fade-out");
  window.location = "../index.html";
};
