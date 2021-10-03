const table = document.getElementById("table");

table.addEventListener("click", (event) => {
  if (event.target.nodeName === "TD") {
    const newText = prompt("Enter you new text:");
    event.target.innerText = newText;
  }
});
