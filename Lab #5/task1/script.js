let numbers = prompt("Input phone number:").split('');

for(let i = 0; i < numbers.length; i++) {
    numbers[i] = (parseInt(numbers[i]) + 7) % 10
}

[numbers[0], numbers[2]] = [numbers[2], numbers[0]];
[numbers[1], numbers[3]] = [numbers[3], numbers[1]];

alert(`${numbers[0]}-${numbers[1]}-${numbers[2]}-${numbers[3]}`);