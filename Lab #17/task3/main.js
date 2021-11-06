const fromSelect = document.querySelector("#from-select");
const toSelect = document.querySelector("#to-select");
const fromInput = document.querySelector("#from-input");
const toInput = document.querySelector("#to-input");
const swapBtn = document.querySelector("#swap-btn");
const errorMsg = document.querySelector(".message");
const image = document.querySelector("#swap-img");

const BASE_URL =
  "https://v6.exchangerate-api.com/v6/fabc8c289dc71b0d980e731c/latest/";

// Retrieves all currency codes and adds them to the selection menu
const getCurrencies = async () => {
  await fetch(`${BASE_URL}USD`)
    .then((result) => result.json())
    .then((data) => {
      const options = Object.keys(data.conversion_rates);

      // Adds options to fromSelect menu
      options.map((option) => {
        let new_option = document.createElement("option");
        new_option.setAttribute("value", `${option}`);
        new_option.appendChild(document.createTextNode(`${option}`));
        fromSelect.appendChild(new_option);
      });

      // Adds options to toSelect menu
      options.map((option) => {
        let new_option = document.createElement("option");
        new_option.setAttribute("value", `${option}`);
        new_option.appendChild(document.createTextNode(`${option}`));
        toSelect.appendChild(new_option);
      });
    });
};

// Fetch exchange rates and update the DOM
function calculate() {
  const fromCurrency = fromSelect.value;
  const toCurrency = toSelect.value;

  fetch(`${BASE_URL}${fromCurrency}`)
    .then((res) => res.json())
    .then((data) => {
      const rate = data.conversion_rates[toCurrency];
      toInput.value = (fromInput.value * rate).toFixed(2);
    });
}

let wasError = false;

const isNumber = () => {
  errorMsg.classList.remove("error");
  if (!isNaN(fromInput.value)) {
    calculate();
    if (wasError) errorMsg.classList.add("error-fade-out");
  } else {
    errorMsg.classList.add("error");
    errorMsg.classList.remove("error-fade-out");
    wasError = true;
  }
};

// Event Listeners
fromSelect.addEventListener("change", calculate);
fromInput.addEventListener("input", calculate);
fromInput.addEventListener("input", isNumber);
toSelect.addEventListener("change", calculate);
toInput.addEventListener("input", calculate);
swapBtn.addEventListener("click", () => {
  const temp = fromSelect.value;
  fromSelect.value = toSelect.value;
  toSelect.value = temp;
  calculate();
});

getCurrencies();
calculate();
