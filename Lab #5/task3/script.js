const x1 = document.getElementById('x1');
const y1 = document.getElementById('y1');
const x2 = document.getElementById('x2');
const y2 = document.getElementById('y2');
const error = document.querySelector('.error');
const resultInput = document.getElementById('result');

const distanta = () => {
    let firstXPoint = parseFloat(x1.value);
    let firstYPoint = parseFloat(y1.value);
    let secondXPoint = parseFloat(x2.value);
    let secondYPoint = parseFloat(y2.value);

    if(x1.value.length === 0 || y1.value.length === 0 || x2.value.length === 0 || y2.value.length === 0) {
        error.classList.add("error-appear");
        resultInput.value = '';
    }
    else {
        error.classList.remove('error-appear')
        let xDifference = firstXPoint - secondXPoint;
        let yDifference = firstYPoint - secondYPoint;
        resultInput.value = Math.sqrt(xDifference * xDifference + yDifference * yDifference).toFixed(2);
    }
}
