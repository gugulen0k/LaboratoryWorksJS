const increaseButton = document.getElementById("increase-button");
const decreaseButton = document.getElementById("decrease-button");
const totalPrice = document.getElementById("total");
const delivery = document.getElementById("delivery-price");
const subtotal = document.getElementById("subtotal");
const totalProductPrice = document.getElementById("total-price");

const radios = document.querySelector(".delivery-type");

radios.addEventListener("change", function (e) {
  if (e.target.tagName === "INPUT" && e.target.type === "radio") {
    countSum();
  }
});

const countSum = () => {
  const array = [
    totalPrice,
    ...document.querySelectorAll('input[type="radio"]:checked'),
  ];

  const sum = array.reduce((acc, n) => acc + +n.dataset.value, 0);
  delivery.textContent = `${array[1].dataset.value} MDL`;
  totalPrice.textContent = `${sum} MDL`;
};

decreaseButton.addEventListener("click", () => {
  const quantity = document.getElementById("count");
  if (quantity.textContent > 1) {
    totalProductPrice.textContent = `${
      parseInt(totalProductPrice.textContent) - 75
    } MDL`;
    subtotal.textContent = `${parseInt(subtotal.textContent) - 75} MDL`;
    totalPrice.dataset.value = parseInt(totalPrice.textContent) - 75;
    totalPrice.textContent = `${parseInt(totalPrice.textContent) - 75} MDL`;
    quantity.textContent = parseInt(quantity.textContent) - 1;
  } else {
    quantity.textContent = 1;
  }
});

increaseButton.addEventListener("click", () => {
  const quantity = document.getElementById("count");
  totalProductPrice.textContent = `${
    parseInt(totalProductPrice.textContent) + 75
  } MDL`;
  subtotal.textContent = `${parseInt(subtotal.textContent) + 75} MDL`;
  totalPrice.dataset.value = parseInt(totalPrice.textContent) + 75;
  totalPrice.textContent = `${parseInt(totalPrice.textContent) + 75} MDL`;
  quantity.textContent = parseInt(quantity.textContent) + 1;
});
