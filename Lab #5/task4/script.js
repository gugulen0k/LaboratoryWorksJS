const numberInput = document.getElementById('number');
const exponentInput = document.getElementById('exponent');
const error = document.querySelector('.error');
const resultInput = document.getElementById('result');

const integerPower = (base, exponent) => {
    let num = parseFloat(base.value);
    let exp = parseFloat(exponent.value);

    if(numberInput.value.length === 0 || exponentInput.value.length === 0) {
        error.classList.add("error-appear");
        resultInput.value = '';
    }
    else {
        error.classList.remove('error-appear');
        resultInput.value = num**exp;
    }
}

const calculate = () => {
    integerPower(numberInput, exponentInput);
}
