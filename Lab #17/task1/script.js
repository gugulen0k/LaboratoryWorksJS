const addNikeToBasket = () => {
  const quantity = document.getElementById("nike-count");
  const price = document.getElementById("price-nike");
  const totalItems = document.getElementById("total-items");
  const totalUnits = document.getElementById("total-units");
  const total = document.getElementById("total");

  if (totalItems.dataset.nike === "false") {
    totalItems.dataset.nike = "true";
    totalItems.textContent = parseInt(totalItems.textContent) + 1;
  }

  totalUnits.textContent =
    parseInt(totalUnits.textContent) + parseInt(quantity.value);
  total.textContent = (
    parseFloat(total.textContent) +
    parseInt(quantity.value) * parseFloat(price.textContent)
  ).toFixed(2);
};

const addConverse1ToBasket = () => {
  const quantity = document.getElementById("converse1-count");
  const price = document.getElementById("price-converse1");
  const totalItems = document.getElementById("total-items");
  const totalUnits = document.getElementById("total-units");
  const total = document.getElementById("total");

  if (totalItems.dataset.converse1 === "false") {
    totalItems.dataset.converse1 = "true";
    totalItems.textContent = parseInt(totalItems.textContent) + 1;
  }

  totalUnits.textContent =
    parseInt(totalUnits.textContent) + parseInt(quantity.value);
  total.textContent = (
    parseFloat(total.textContent) +
    parseInt(quantity.value) * parseFloat(price.textContent)
  ).toFixed(2);
};

const addConverse2ToBasket = () => {
  const quantity = document.getElementById("converse2-count");
  const price = document.getElementById("price-converse2");
  const totalItems = document.getElementById("total-items");
  const totalUnits = document.getElementById("total-units");
  const total = document.getElementById("total");

  if (totalItems.dataset.converse2 === "false") {
    totalItems.dataset.converse2 = "true";
    totalItems.textContent = parseInt(totalItems.textContent) + 1;
  }

  totalUnits.textContent =
    parseInt(totalUnits.textContent) + parseInt(quantity.value);
  total.textContent = (
    parseFloat(total.textContent) +
    parseInt(quantity.value) * parseFloat(price.textContent)
  ).toFixed(2);
};
