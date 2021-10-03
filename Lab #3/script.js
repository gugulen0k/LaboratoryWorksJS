// ------------------- [ Task #1 ] -------------------
// const fullDate = prompt("Введите дату (например: 12.03.2007)").split(".");
// const day = parseInt(fullDate[0]);
// const month = parseInt(fullDate[1]);
// const year = parseInt(fullDate[2]);
// let zodiacSign;
// let chiniseZodiacSign;

// if ((month == 3 && day >= 21) || (month == 4 && day <= 20)) zodiacSign = "Овен";
// else if ((month == 4 && day >= 21) || (month == 5 && day <= 20))
//   zodiacSign = "Телец";
// else if ((month == 5 && day >= 21) || (month == 6 && day <= 21))
//   zodiacSign = "Близнецы";
// else if ((month == 6 && day >= 22) || (month == 7 && day <= 22))
//   zodiacSign = "Рак";
// else if ((month == 7 && day >= 23) || (month == 8 && day <= 23))
//   zodiacSign = "Лев";
// else if ((month == 8 && day >= 24) || (month == 9 && day <= 23))
//   zodiacSign = "Дева";
// else if ((month == 9 && day >= 24) || (month == 10 && day <= 22))
//   zodiacSign = "Весы";
// else if ((month == 10 && day >= 23) || (month == 11 && day <= 22))
//   zodiacSign = "Скорпион";
// else if ((month == 11 && day >= 23) || (month == 12 && day <= 21))
//   zodiacSign = "Стрелец";
// else if ((month == 12 && day >= 22) || (month == 1 && day <= 20))
//   zodiacSign = "Козерог";
// else if ((month == 1 && day >= 21) || (month == 2 && day <= 19))
//   zodiacSign = "Водолей";
// else if ((month == 2 && day >= 20) || (month == 3 && day <= 20))
//   zodiacSign = "Рыбы";

// if (year % 12 == 4) chiniseZodiacSign = "Крыса";
// else if (year % 12 == 5) chiniseZodiacSign = "Бык";
// else if (year % 12 == 6) chiniseZodiacSign = "Тигр";
// else if (year % 12 == 7) chiniseZodiacSign = "Кролик";
// else if (year % 12 == 8) chiniseZodiacSign = "Дракон";
// else if (year % 12 == 9) chiniseZodiacSign = "Змея";
// else if (year % 12 == 10) chiniseZodiacSign = "Лошадь";
// else if (year % 12 == 11) chiniseZodiacSign = "Овца";
// else if (year % 12 == 0) chiniseZodiacSign = "Обезьяна";
// else if (year % 12 == 1) chiniseZodiacSign = "Петух";
// else if (year % 12 == 2) chiniseZodiacSign = "Собака";
// else if (year % 12 == 3) chiniseZodiacSign = "Свинья";

// alert(
//   `Знак зодиака: ${zodiacSign}\nВосточный знак зодиака: ${chiniseZodiacSign}`
// );
// ---------------------------------------------------

// ------------------- [ Task #2 ] -------------------
// let number;
// do {
//   number = prompt("Введите число:", 0);
// } while (number < 100 && number);
// ---------------------------------------------------

// ------------------- [ Task #3 ] -------------------
// let year = 1990;
// let weight = 20;
// const percent = 0.2;

// // variant "a"
// while (weight >= 5) {
//   weight = weight - weight * percent;
//   year = year + 2;
// }
// alert(
//   `Начиная с ${year}-ого года, будет собрано менее 5 тонн (${weight.toFixed(
//     2
//   )} тонн)`
// );

// year = 1990;
// weight = 20;
// let total = weight;
// // variant "b"
// while (total <= 90) {
//   year++;
//   if (year % 2 === 0) weight = weight - weight * percent;
//   total += weight;
// }
// alert(
//   `В ${year}-ом году суммарный урожай яблок превысит 90 тонн (${total.toFixed(
//     2
//   )} тонн)`
// );
// ---------------------------------------------------

// ------------------- [ Task #4 ] -------------------
// // variant "a"
// let height = 0;
// let day = 0;
// while (height < 15) {
//   height += 5;
//   height -= 3;
//   day++;
// }
// alert(
//   `Через ${day} дней божья коровка достигнет вершины столба (высота = 15м)`
// );

// // variant "b"
// height = 6;
// day = 0;
// while (height < 15) {
//   height += 5;
//   height -= 3;
//   day++;
// }
// alert(`Через ${day} дней божья коровка достигнет вершины столба (высота = 6м)`);

// // variant "c"
// height = 6;
// day = 0;
// while (height < 15) {
//   height -= 3;
//   height += 5;
//   day++;
// }
// alert(`Через ${day} дней божья коровка достигнет вершины столба (высота = 6м)`);
// ---------------------------------------------------

// ------------------- [ Task #5 ] -------------------
// const randomNumber = Math.floor(Math.random() * (100 - 1) + 1);
// let guess = 1;

// while (guess !== randomNumber) {
//   guess = parseInt(prompt(`Угадайте число (от)`));
//   if (isNaN(guess)) alert("Ошибка!\nВы ввели не число.");
//   if (guess > randomNumber) alert("Меньше");
//   if (guess < randomNumber) alert("Больше");
// }
// alert(`Поздравляю, вы угадали число! `);
// ---------------------------------------------------
