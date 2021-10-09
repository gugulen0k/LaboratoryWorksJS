const addInput = () => {
  const inputs = document.getElementById("inputs");
  const newInput = document.createElement("input");
  newInput.style.opacity = 0;
  newInput.classList.add("fadeIn");

  inputs.appendChild(newInput);
};

const removeLi = () => {
  const list = document.getElementById("list");
  if (list.firstElementChild === null) alert("There is nothing to delete");
  else {
    list.lastElementChild.classList.add("fadeOut");
    setTimeout(() => {
      list.removeChild(list.lastElementChild);
    }, 300);
  }
};

const addLi = () => {
  const list = document.getElementById("list-third");
  const newLi = document.createElement("li");
  newLi.textContent = "пункт";
  newLi.style.opacity = 0;
  newLi.classList.add("fadeIn");
  list.appendChild(newLi);
};

const fillList = () => {
  const list = document.getElementById("list-fourth");
  const values = prompt(
    "Enter values for the list (separated by a space or comma)"
  );

  if (values === null) return;
  else {
    const array = values.split(/[\s,]+/);
    for (item of array) {
      let li = document.createElement("li");
      li.style.opacity = 0;
      li.classList.add("fadeIn");
      li.textContent = item;
      list.appendChild(li);
    }
  }
};

const addDiv = () => {
  const values = prompt(
    "Enter values for the list (separated by a space or comma)"
  );
  const div = document.createElement("div");
  div.classList.add("task-box");

  if (values === null) return;
  else {
    const array = values.split(/[\s,]+/);
    for (item of array) {
      let p = document.createElement("p");
      p.textContent = item;
      div.appendChild(p);
    }
  }

  // Для добавления в конец body нужно написать следующую конструкцию: document.body.appendChild(div)
  // Я не добавил в конец body, так как это нарушит стиль
  document.getElementById("main").appendChild(div);
};

const list = document.getElementById("list-fifth");

list.addEventListener("click", (event) => {
  let item = event.target;
  if (item.nodeName === "LI") item.textContent = Number(item.textContent) + 1;
});
