let first = document.getElementById("x1");
let second = document.getElementById("x2");
let third = document.getElementById("x3");
let typeInput = document.getElementById("type");
let perimeterInput = document.getElementById("perimeter");
let areaInput = document.getElementById("area");
let error = document.querySelector('.error');


const checkValidity = (a, b, c) => {
    return !(a + b <= c || a + c <= b || b + c <= a);
}

const getTriangleType = (a, b, c) => {
    /*
     * Произвольный - (англ.)Arbitrary
     * Равносторонний - (англ.)Equilateral
     * Равнобедренный - (англ.)Isosceles
    */
    return (a === b && b === c) && 'equilateral' || (a === b || a === c || b === c) && 'isosceles' || 'arbitrary';
}

const calculate = () => {
    let firstNumber = parseFloat(first.value);
    let secondNumber = parseFloat(second.value);
    let thirdNumber = parseFloat(third.value);

    if(first.value.length === 0 || second.value.length === 0 || third.value.length === 0)
    {
        error.classList.add("error-appear");
        typeInput.value = 'Doesn\'t exist';
        areaInput.value = '';
        perimeterInput.value = '';
    }
    else{
        error.classList.remove('error-appear');

        if(checkValidity(firstNumber, secondNumber, thirdNumber)) {
            const perimeter = (firstNumber + secondNumber + thirdNumber) / 2;
            areaInput.value = (Math.sqrt(perimeter * ((perimeter - firstNumber) * (perimeter - secondNumber) * (perimeter - thirdNumber)))).toFixed(2);
            perimeterInput.value = perimeter.toFixed(2);

            let triangle = getTriangleType(firstNumber, secondNumber, thirdNumber)

            switch (triangle) {
                case 'equilateral':
                    typeInput.value = 'Equilateral'
                    break;
                case 'isosceles':
                    typeInput.value = 'Isosceles'
                    break;
                case 'arbitrary':
                    typeInput.value = 'Arbitrary'
                    break;
            }
        }
        else {
            typeInput.value = 'Doesn\'t exist';
            areaInput.value = '';
            perimeterInput.value = '';
        }
    }
};
