const paragraphs = document.getElementById("page");

paragraphs.addEventListener("click", (event) => {
  if (event.target.nodeName === "P") event.target.style.fontStyle = "italic";
});
