const changeText = () => {
  const newText = prompt("Enter you new text:");
  const paragraph = document.getElementById("paragraph");

  paragraph.innerText = newText;
};
