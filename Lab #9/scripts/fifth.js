const timeLabels = document.querySelectorAll(".time");
let lessons = [];
console.log(timeLabels);
const firstLesson = new Date();
firstLesson.setHours(9, 20, 0);
lessons.push(firstLesson);

const secondLesson = new Date();
secondLesson.setHours(10, 50, 0);
lessons.push(secondLesson);

const thirdLesson = new Date();
thirdLesson.setHours(12, 30, 0);
lessons.push(thirdLesson);

const fourthLesson = new Date();
fourthLesson.setHours(14, 0, 0);
lessons.push(fourthLesson);

const msToTime = (duration) => {
  let = seconds = Math.floor((duration / 1000) % 60);
  let = minutes = Math.floor((duration / (1000 * 60)) % 60);
  let = hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  return `${hours}h. ${minutes}min. ${seconds}sec.`;
};

const updateTime = setInterval(() => {
  let now = new Date();
  const labels = [];
  timeLabels.forEach((label) => labels.push(label.textContent));

  for (let i = 0; i < timeLabels.length; i++) {
    if (labels.every((label) => label === "Next lesson tomorrow")) {
      clearInterval(updateTime);
    } else if (lessons[i].getTime() - now.getTime() < 0) {
      timeLabels[i].textContent = "Next lesson tomorrow";
    } else {
      timeLabels[i].textContent = msToTime(
        lessons[i].getTime() - now.getTime()
      );
    }
  }
}, 1000);

const previousPage = () => {
  const page = document.getElementById("main");
  page.classList.add("fade-out");
  window.location = "./fourth.html";
};
