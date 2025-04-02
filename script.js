const text = document.querySelector(".calculator-text");

let totalNumbers = [], intNumber, tempNumber = 0, operation, concatenatingNumber, strNumber;

//function located in every number button, adds a number to this array in relation to which button was clicked, then converts it into an integer
function addNumbersToTotal(num) {
  if(totalNumbers.length < 11) {
  totalNumbers.push(num);
  }
  intNumber = parseInt(totalNumbers.join(""));
  text.textContent = intNumber;
}

function returnResult() {
    if(operation == "plus") {
        if(tempNumber != 0){
        concatenatingNumber = intNumber;
        intNumber = tempNumber + intNumber;
    }
        if(tempNumber == 0){
        intNumber = concatenatingNumber + intNumber;
    }
        tempNumber = 0;
    }
    else if(operation == "minus") {
        if(tempNumber != 0){
            concatenatingNumber = intNumber;
            intNumber = tempNumber - intNumber;
        }
            if(tempNumber == 0){
            intNumber = intNumber - concatenatingNumber;
        }
            tempNumber = 0;
    }
    else if(operation == "multiplication") {
        if(tempNumber != 0){
            concatenatingNumber = intNumber;
            intNumber = tempNumber * intNumber;
        }
            if(tempNumber == 0){
            intNumber = concatenatingNumber * intNumber;
        }
            tempNumber = 0;
    }
    else if(operation == "division") {
        if(tempNumber != 0){
            concatenatingNumber = intNumber;
            intNumber = tempNumber / intNumber;
        }
            if(tempNumber == 0){
            intNumber = concatenatingNumber / intNumber;
        }
            tempNumber = 0;
    }
    else if(operation == "modulus") {
        if(tempNumber != 0){
            concatenatingNumber = intNumber;
            intNumber = tempNumber % intNumber;
        }
            if(tempNumber == 0){
            intNumber = concatenatingNumber % intNumber;
        }
            tempNumber = 0;
    }
}

//Add an event listener for every button and add the corresponding number to an array (max 10)
const num1 = document.querySelector(".number-one");
num1.addEventListener("click", () => {
  addNumbersToTotal(1);
});

const num2 = document.querySelector(".number-two");
num2.addEventListener("click", () => {
  addNumbersToTotal(2);
});

const num3 = document.querySelector(".number-three");
num3.addEventListener("click", () => {
  addNumbersToTotal(3);
});

const num4 = document.querySelector(".number-four");
num4.addEventListener("click", () => {
  addNumbersToTotal(4);
});

const num5 = document.querySelector(".number-five");
num5.addEventListener("click", () => {
  addNumbersToTotal(5);
});

const num6 = document.querySelector(".number-six");
num6.addEventListener("click", () => {
  addNumbersToTotal(6);
});

const num7 = document.querySelector(".number-seven");
num7.addEventListener("click", () => {
  addNumbersToTotal(7);
});

const num8 = document.querySelector(".number-eight");
num8.addEventListener("click", () => {
  addNumbersToTotal(8);
});

const num9 = document.querySelector(".number-nine");
num9.addEventListener("click", () => {
  addNumbersToTotal(9);
});

const num0 = document.querySelector(".number-zero");
num0.addEventListener("click", () => {
  addNumbersToTotal(0);
});

const clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", () => {
    totalNumbers = [];
    intNumber = undefined, tempNumber = 0;
    text.textContent = "0";
});

const cancelButton = document.querySelector(".cancel");
cancelButton.addEventListener("click", () => {
    totalNumbers.pop();
    intNumber = parseInt(totalNumbers.join(""));
    text.textContent = intNumber;
    if(isNaN(intNumber) == true){
        text.textContent = "0";
    }
});

const modulusButton = document.querySelector(".modulus");
modulusButton.addEventListener("click", () => {
    if(tempNumber == 0){
        tempNumber = intNumber;
    }
    tempNumber = intNumber, operation = "modulus";
    intNumber = 0, totalNumbers = [];
});

const divisionButton = document.querySelector(".division");
divisionButton.addEventListener("click", () => {
    if(tempNumber == 0){
        tempNumber = intNumber;
    }
    tempNumber = intNumber, operation = "division";
    intNumber = 0, totalNumbers = [];
});

const multiplicationButton = document.querySelector(".multiplication");
multiplicationButton.addEventListener("click", () => {
    if(tempNumber == 0){
        tempNumber = intNumber;
    }
    tempNumber = intNumber, operation = "multiplication";
    intNumber = 0, totalNumbers = [];
});

const minusButton = document.querySelector(".minus");
minusButton.addEventListener("click", () => {
    if(tempNumber == 0){
        tempNumber = intNumber;
    }
    tempNumber = intNumber, operation = "minus";
    intNumber = 0, totalNumbers = [];
});

const plusButton = document.querySelector(".plus");
plusButton.addEventListener("click", () => {
    if(tempNumber == 0){
        tempNumber = intNumber;
    }
    operation = "plus";
    intNumber = 0, totalNumbers = [];
});

const equalButton = document.querySelector(".equal");
equalButton.addEventListener("click", () => {
    returnResult();
    if(intNumber.toString().length >= 11) {
        text.textContent = "ERROR!";
        intNumber = 0;
    }
    else if(intNumber.toString().length < 11){
    text.textContent = intNumber;
    totalNumbers = [];
    }
});