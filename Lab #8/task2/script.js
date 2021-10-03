const increaseValues = () => {
  const list = document.getElementById("list").querySelectorAll("li");

  for (item of list) {
    item.innerText = Number(item.innerText) + 1;
  }
};
