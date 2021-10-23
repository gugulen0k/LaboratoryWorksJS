const calculateSquare = () => {
  const number = document.getElementById("square-number");

  if (isNaN(number.value)) {
    alert("It's not a number");
    return;
  } else {
    alert(number.value * number.value);
  }
};

const swapInputs = () => {
  const firstInput = document.getElementById("first-input");
  const secondInput = document.getElementById("second-input");

  [firstInput.value, secondInput.value] = [secondInput.value, firstInput.value];
};

const counterButton = document.getElementById("counter");
counterButton.addEventListener("click", (element) => {
  console.log(element.target.textContent);
  const number = parseInt(element.target.textContent);
  element.target.textContent = number + 1;
});

const images = document.getElementById("images");

images.addEventListener("mouseover", (element) => {
  element.target.style.opacity = "0";
});
images.addEventListener("mouseout", (element) => {
  element.target.style.opacity = "1";
});

const setOption = () => {
  const list = document.getElementById("items");
  const indexNumber = document.getElementById("index-number");
  list.selectedIndex = indexNumber.value - 1;
};

const table = document.getElementById("table");
table.addEventListener("click", (element) => {
  if (element.target.nodeName === "TD") {
    const newValue = prompt("Enter new value:");
    element.target.textContent = newValue;
  }
});

const addNewUser = () => {
  const table = document.getElementById("table");
  const firstName = document.getElementById("first-name").value;
  const lastName = document.getElementById("last-name").value;

  const newRow = document.createElement("tr");
  const firstNameCell = document.createElement("td");
  const lastNameCell = document.createElement("td");

  firstNameCell.textContent = firstName;
  lastNameCell.textContent = lastName;
  newRow.appendChild(firstNameCell);
  newRow.appendChild(lastNameCell);
  table.appendChild(newRow);
};

const countries = document.getElementById("countries");
countries.addEventListener("change", (element) => {
  const cities = document.getElementById("cities");
  const options = document.querySelectorAll("#cities option");
  options.forEach((e) => e.remove());

  const firstOption = document.createElement("option");
  const secondOption = document.createElement("option");
  const thirdOption = document.createElement("option");

  if (element.target.value === "russia") {
    firstOption.textContent = "Moscow";
    secondOption.textContent = "Saint-Petersburg";
    thirdOption.textContent = "Kaluga";
  } else if (element.target.value === "moldova") {
    firstOption.textContent = "Chisinau";
    secondOption.textContent = "Balti";
    thirdOption.textContent = "Comrat";
  } else if (element.target.value === "italy") {
    firstOption.textContent = "Rome";
    secondOption.textContent = "Mentana";
    thirdOption.textContent = "Monterotondo";
  }

  cities.appendChild(firstOption);
  cities.appendChild(secondOption);
  cities.appendChild(thirdOption);
});
