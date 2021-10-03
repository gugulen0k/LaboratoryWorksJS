const changeText = () => {
  const paragraphs = document.querySelectorAll("p");

  paragraphs.forEach((item, index) => (item.innerText = index + 1));
};
