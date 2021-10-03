// // =================== [ Task #1 ] ===================
// const library = {
//     js: 'test',
//     jq: 'hello',
//     css: 'world'
// }
//
// const keysArray = Object.keys(library);
// // ===================================================

// // =================== [ Task #2 ] ===================
// const string = prompt('Input a string').toLowerCase();
// const reversedString = string.toLowerCase().split('').reverse().join('');
//
// string !== reversedString ? alert('This word is not a palindrome') : alert('This word is palindrome');
// // ===================================================

// // =================== [ Task #3 ] ===================
// const string = prompt("Input a string (numbers):");
// const array = string.split(' ');
// array.forEach((item, index) => {
//     if(item > 1){
//         let tmpString = item.toLowerCase()
//         let tmpReversedString = tmpString.split('').reverse().join('');
//
//         if(tmpString === tmpReversedString) array[index] = ''
//     }
// })
// console.log(array.join(' '));
// // ===================================================

// // =================== [ Task #4 ] ===================
// const string = prompt('Input a string');
// const array = string.split(' ');
// let counter = 0;
//
// array.forEach((item) => item.toLowerCase() === 'cert' ? counter++ : counter);
//
// console.log(counter)
// // ===================================================

// // =================== [ Task #5 ] ===================
// const string = prompt('Input a string');
// const array = string.split(' ');
//
// array.forEach((item, index) => {
//     if(index % 2 === 1 && item.length % 2 === 1) array[index] = '';
// })
//
// console.log(array.join(' '))
// // ===================================================

// // =================== [ Task #6 ] ===================
// let array = [4, -8, 7, -6, 0, -7, 5];
// let negativeArray = [];
// let positiveArray = [];
//
// array.forEach((item) => item < 0 ? negativeArray.push(item) : positiveArray.push(item))
//
// array = [...negativeArray.sort((a, b) => { return a - b }).reverse(),  ...positiveArray.sort((a, b) => { return a - b })]
// console.log(array)
// // ===================================================

// =================== [ Task #7 ] ===================
// let string = prompt('Input a string');
// let array = string.split('');
// array.map((item, index) => {
//     if(item === ' ') array[index] = '   '
// })
// string = array.join('');
// console.log(string)
// ===================================================

// =================== [ Task #8 ] ===================
// let string = prompt('Input a string');
// let expression = string.match(/[^\d()]+|[\d.]+/g);
// switch (expression[1]) {
//     case '+':
//         alert(`The answer is ${parseInt(expression[0]) + parseInt(expression[2])}`);
//         break;
//     case '-':
//         alert(`The answer is ${parseInt(expression[0]) - parseInt(expression[2])}`);
//         break;
//     case '*':
//         alert(`The answer is ${parseInt(expression[0]) * parseInt(expression[2])}`);
//         break;
//     case '/':
//         alert(`The answer is ${parseInt(expression[0]) / parseInt(expression[2])}`)
//         break;
// }
// ===================================================