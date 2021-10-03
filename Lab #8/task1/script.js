const findZeros = () => {
  const table = document.getElementById("table");

  for (let row of table.rows) {
    for (let cell of row.cells) {
      if (Number(cell.innerText) === 0) cell.style.backgroundColor = "#ff5555";
    }
  }
};
