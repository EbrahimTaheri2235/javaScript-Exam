type InputElementType = HTMLInputElement;
type ButtonElementType = HTMLButtonElement;
type NumberArray = string[];

const inputField = document.querySelector<InputElementType>("#inputField");
const RandomNumber =document.querySelector<ButtonElementType>("#getRandomNumber");
const addToArray = document.querySelector<ButtonElementType>("#addToArray");
const deleteEveryThing =document.querySelector<ButtonElementType>("#deleteEveryThing");

const numbersArray: NumberArray = [];

if (RandomNumber) {
  RandomNumber.addEventListener("click", () => {
    const randomNumber = Math.floor(Math.random() * 90000) + 10000;
    if (inputField) {
      inputField.value = randomNumber.toString();
    }
  });
}

const calculateAndDisplay = () => {
  if (inputField) {
    const inputValue = inputField.value;
    if (inputValue.length !== 5 || isNaN(parseInt(inputValue))) {
      alert("The input must be a five-digit number.");
      return;
    }
    numbersArray.push(inputValue);
    console.log(numbersArray);
  }
};

if (addToArray) {
  addToArray.addEventListener("click", () => {
    calculateAndDisplay();
  });
}

deleteEveryThing?.addEventListener("click", () => {
  clearValues();
});

function clearValues() {
  numbersArray.length = 0;
  if (inputField) {
    inputField.value = "";
  }
  console.clear();
}