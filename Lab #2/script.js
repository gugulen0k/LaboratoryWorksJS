// ------------------- [ Task #1 ] -------------------
// let number;
// do {
//   number = prompt("Введите число:", 0);
// } while (number < 100 && number);
// ---------------------------------------------------

// ------------------- [ Task #2 ] -------------------
// for (let i = 2; i <= 10; i++) document.write(i + " ");
// ---------------------------------------------------

// ------------------- [ Task #3 ] -------------------
// const num1 = Number(prompt("Введите число 1:"));
// const num2 = Number(prompt("Введите число 2:"));
// const num3 = Number(prompt("Введите число 3:"));
// const numbersArray = [num1, num2, num3];

// const amount = () => {
//   let tmpSum = 0;
//   for (number of numbersArray) tmpSum += number;
//   return tmpSum;
// };
// const average = () => {
//   return (amount() / 3).toFixed(2);
// };
// const composition = () => {
//   let tmpCom = 1;
//   for (number of numbersArray) tmpCom = tmpCom * number;
//   return tmpCom;
// };
// const minimum = () => {
//   let min = numbersArray[0];
//   for (number of numbersArray) number < min ? (min = number) : min;
//   return min;
// };
// const maximum = () => {
//   let max = numbersArray[0];
//   for (number of numbersArray) number > max ? (max = number) : max;
//   return max;
// };

// document.write(`
//   <div class="table">
//     <div class="column first">Numbers</div>
//     <div class="column second">${numbersArray[0]}, ${numbersArray[1]}, ${
//   numbersArray[2]
// }</div>

//     <div class="column first">Amount</div>
//     <div class="column second">${amount()}</div>

//     <div class="column first">Average</div>
//     <div class="column second">${average()}</div>

//     <div class="column first">Composition</div>
//     <div class="column second">${composition()}</div>

//     <div class="column first">Minimum</div>
//     <div class="column second">${minimum()}</div>

//     <div class="column first">Maximum</div>
//     <div class="column second">${maximum()}</div>
//   </div>
//  `);
// ---------------------------------------------------

// ------------------- [ Task #4 ] -------------------
// let firstNumber;
// let secondNumber;
// do {
//   firstNumber = prompt("Введите число 1:");
//   secondNumber = prompt("Введите число 2:");
// } while (secondNumber % firstNumber !== 0);
// ---------------------------------------------------

// ------------------- [ Task #5 ] -------------------
// document.write(`
//   <div class="numerical-table">
//     <div class="column first">Numbers</div>
//     <div class="column first">Square</div>
//     <div class="column first">Cube</div>`);
// for (let i = 0; i <= 10; i++) {
//   document.write(`
//     <div class="column second">${i}</div>
//     <div class="column second">${i ** 2}</div>
//     <div class="column second">${i ** 3}</div>
//   `);
// }
// document.write(`</div>`);
// ---------------------------------------------------

// ------------------- [ Task #6 ] -------------------
// const product1 = {
//   id: 1,
//   price: 2.98,
//   amount: 0,
// };
// const product2 = {
//   id: 2,
//   price: 4.5,
//   amount: 0,
// };
// const product3 = {
//   id: 3,
//   price: 9.98,
//   amount: 0,
// };
// const product4 = {
//   id: 4,
//   price: 4.49,
//   amount: 0,
// };
// const product5 = {
//   id: 5,
//   price: 6.87,
//   amount: 0,
// };

// const products = [product1, product2, product3, product4, product5];

// let productNumber = 1;
// while (productNumber > 0 && !isNaN(productNumber)) {
//   productNumber = +prompt("Номер продукта (от 1 до 5)");

//   if (productNumber > 5 || isNaN(productNumber)) {
//     alert("Неверно!\nВведите номер продукта (от 1 до 5)");
//     productNumber = 1;
//     continue;
//   }

//   let productCount = +prompt(
//     "Введите кол-во проданных экземпляров данного продукта"
//   );

//   if (isNaN(productCount)) productCount = 0;

//   switch (productNumber) {
//     case 1:
//       product1.amount += productCount;
//       break;
//     case 2:
//       product2.amount += productCount;
//       break;
//     case 3:
//       product3.amount += productCount;
//       break;
//     case 4:
//       product4.amount += productCount;
//       break;
//     case 5:
//       product5.amount += productCount;
//       break;
//   }
// }

// document.write(`
//   <div class="products-table">
//     <div class="column first">Номер продукта</div>
//     <div class="column first">Цена за 1 шт.</div>
//     <div class="column first">Кол-во проданно</div>
//     <div class="column first">Сумма проданного</div>
// `);
// for (product of products) {
//   document.write(`
//     <div class="column second">${product.id}</div>
//     <div class="column second">$${product.price}</div>
//     <div class="column second">${product.amount}</div>
//     <div class="column second">$${(product.price * product.amount).toFixed(
//       2
//     )}</div>
//   `);
// }
// document.write(`</div>`);
// ---------------------------------------------------
