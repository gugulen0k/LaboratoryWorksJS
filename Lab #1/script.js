// ------------------- [ Task #1 ] -------------------
const answer1 =
  prompt("Каково «официальное» название JavaScript?") === "ECMAScript"
    ? alert("Верно")
    : alert("Не знаете? «ECMAScript»!");
// ---------------------------------------------------

// ------------------- [ Task #2 ] -------------------
const answer2 = parseInt(prompt("Введите число"));
answer2 === 0 ? alert(0) : answer2 > 0 ? alert(1) : alert(-1);
// ---------------------------------------------------

// ------------------- [ Task #3 ] -------------------
const day = parseInt(prompt("Введите день"));
if (day >= 1 && day <= 11) alert("Первая декада");
else if (day >= 12 && day <= 21) alert("Вторая декада");
else if (day >= 22 && day <= 31) alert("Третья декада");
// ---------------------------------------------------

// ------------------- [ Task #4 ] -------------------
const month = parseInt(prompt("Введите месяц"));
if ((month >= 1 && month <= 2) || month === 12) alert("Зима");
else if (month >= 3 && month <= 5) alert("Весна");
else if (month >= 6 && month <= 8) alert("Лето");
else if (month >= 9 && month <= 11) alert("Осень");
// ---------------------------------------------------

// ------------------- [ Task #5 ] -------------------
const first = parseFloat(prompt("Введите первое число"));
const second = parseFloat(prompt("Введите второе число"));
const third = parseFloat(prompt("Введите третье число"));

function compare(a, b) {
  if (a > b) return 1; // если первое значение больше второго
  if (a == b) return 0; // если равны
  if (a < b) return -1; // если первое значение меньше второго
}

let numbers = [first, second, third];

alert(`Числа: ${numbers.sort(compare)}\nСумма=${
  first + second + third
}\nПроизведение=${first * second * third}\nМинимум=${Math.min(
  first,
  second,
  third
)}\nМаксимум=${Math.max(first, second, third)}
`);
// ---------------------------------------------------

// ------------------- [ Task #6 ] -------------------
const min = prompt("Введите минуты");

if (min >= 0 && min <= 15) alert("Первая четверть часа");
if (min >= 16 && min <= 30) alert("Вторая четверть часа");
if (min >= 31 && min <= 45) alert("Третья четверть часа");
if (min >= 46 && min <= 59) alert("Четвёртая четверть часа");
// ---------------------------------------------------

// ------------------- [ Task #7 ] -------------------
const login = prompt("Введите логин");
if (login === null) alert("Вход отменён");
else if (login !== "Админ") alert("Я вас не знаю");
else if (login === "Админ") {
  if (prompt("Введите пароль") === "Чёрный Властелин")
    alert("Добро пожаловать!");
  else alert("Пароль неверен");
}
// ---------------------------------------------------

// ------------------- [ Task #8 ] -------------------
let simmetricalNumber = prompt("Введите четырёхзначное число");
if (
  (simmetricalNumber % 10) * 10 +
    (Math.floor(simmetricalNumber / 10) % 10) -
    Math.floor(simmetricalNumber / 100) +
    1 ===
  1
)
  alert("Число симметрично");
else alert("Число не симметрично");
// ---------------------------------------------------

// ------------------- [ Task #9 ] -------------------
const fullTimeSeconds = prompt("Введите кол-во секунд");
const hours = Math.floor(fullTimeSeconds / 3600);
const minutes = Math.floor((fullTimeSeconds % 3600) / 60);
const seconds = Math.floor((fullTimeSeconds % 3600) % 60);

const dMinutes = parseInt(minutes) < 10 ? `0${minutes}` : minutes;
const dSeconds = parseInt(seconds) < 10 ? `0${seconds}` : seconds;

alert(`С начала суток прошло ${hours}:${dMinutes}:${dSeconds}`);
// ---------------------------------------------------
