const text = document.querySelector(".calculator-text");

let totalNumbers = [], intNumber;

//function located in every number button, adds a number to this array in relation to which button was clicked, then converts it into an integer
function addNumbersToTotal(num) {
  if(totalNumbers.length < 10) {
  totalNumbers.push(num);
  }
  intNumber = parseInt(totalNumbers.join(""));
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
