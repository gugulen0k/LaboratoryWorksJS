const drawTable = () => {
  const columns = document.getElementById("columns").value;
  const rows = document.getElementById("rows").value;
  const htmlTable = document.getElementById("table");

  if (htmlTable.firstElementChild !== null) {
    htmlTable.removeChild(htmlTable.firstElementChild);
  }
  if (isNaN(columns)) {
    alert("It's not a number");
    return;
  }
  if (isNaN(rows)) {
    alert("It's not a number");
    return;
  }

  let table = document.createElement("table");

  for (let i = 0; i < rows; i++) {
    let row = document.createElement("tr");
    for (let j = 0; j < columns; j++) {
      if (i === 0) {
        let cell = document.createElement("th");
        cell.textContent = Math.floor(Math.random() * 100);
        row.appendChild(cell);
      } else {
        let cell = document.createElement("td");
        cell.textContent = Math.floor(Math.random() * 100);
        row.appendChild(cell);
      }
    }
    table.appendChild(row);
  }

  htmlTable.appendChild(table);
};

let number = 6;

const addNewOption = () => {
  const list = document.getElementById("list");
  const newOption = document.createElement("option");
  const optionText = document.createTextNode(`item${number}`);

  newOption.appendChild(optionText);
  list.appendChild(newOption);
  number++;
};

const colorPicker = document.getElementById("color-picker");
const paragraph = document.getElementById("paragraph");

colorPicker.addEventListener("change", (element) => {
  paragraph.style.color = element.target.value;
});

const shapeList = document.getElementById("shapes");
const firstSide = document.getElementById("first-side");
const secondSide = document.getElementById("second-side");
const thirdSide = document.getElementById("third-side");
const angle = document.getElementById("angle");
const radius = document.getElementById("radius");

shapeList.addEventListener("change", (element) => {
  if (element.target.value === "square") {
    firstSide.style.display = "flex";

    secondSide.style.display = "none";
    thirdSide.style.display = "none";
    angle.style.display = "none";
    radius.style.display = "none";
  } else if (element.target.value === "triangle") {
    firstSide.style.display = "flex";
    secondSide.style.display = "flex";
    thirdSide.style.display = "flex";

    angle.style.display = "none";
    radius.style.display = "none";
  } else if (element.target.value === "parallelogram") {
    firstSide.style.display = "flex";
    secondSide.style.display = "flex";
    angle.style.display = "flex";

    thirdSide.style.display = "none";
    radius.style.display = "none";
  } else if (element.target.value === "circle") {
    radius.style.display = "flex";

    firstSide.style.display = "none";
    secondSide.style.display = "none";
    thirdSide.style.display = "none";
    angle.style.display = "none";
  } else if (element.target.value === "rectangle") {
    firstSide.style.display = "flex";
    secondSide.style.display = "flex";

    thirdSide.style.display = "none";
    angle.style.display = "none";
    radius.style.display = "none";
  } else if (element.target.value === "none") {
    firstSide.style.display = "none";
    secondSide.style.display = "none";
    thirdSide.style.display = "none";
    angle.style.display = "none";
    radius.style.display = "none";
  }
});
