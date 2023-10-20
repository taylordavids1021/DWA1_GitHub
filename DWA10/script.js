const MAX_NUMBER = 15;
const MIN_NUMBER = -15;
const STEP_AMOUNT = 1;
const RESET_VALUE = 0;

const elements = {
  number: document.querySelector('[data-key="number"]'),
  subtract: document.querySelector('[data-key="subtract"]'),
  add: document.querySelector('[data-key="add"]'),
  reset: document.querySelector('[data-key="reset"]'),
  alert: document.querySelector('[data-key="alert"]'),
};

const subtractHandler = () => {
  const newValue = parseInt(elements.number.value) - STEP_AMOUNT;
  elements.number.value = newValue;

  if (elements.add.disabled) {
    elements.add.disabled = false;
  }
};

const addHandler = () => {
  const newValue = parseInt(elements.number.value) + STEP_AMOUNT;
  elements.number.value = newValue;

  if (elements.subtract.disabled) {
    elements.subtract.disabled = false;
  }
};

const resetHandler = () => {
  const newValue = RESET_VALUE;
  elements.number.value = newValue;
  elements.alert.open = true;
};

elements.subtract.addEventListener("click", subtractHandler);
elements.add.addEventListener("click", addHandler);
elements.reset.addEventListener("click", resetHandler);
elements.alert.addEventListener("sl-after-hide", () => {
  setTimeout(() => (alert.open = true), 2000);
});

// const MAX_NUMBER = 15
// const MIN_NUMBER = -5
// // add values by certain amount 
// // const STEP_AMOUNT = 5;

// const number = document.querySelector('[data-key="number"]')
// const subtract = document.querySelector('[data-key="subtract"]')
// const add = document.querySelector('[data-key="add"]')

// // parseInt counts for every click number.value eirther more or less
// // if disabled is true disable fucntion will display from css style
// // SubtractHandle holds newValue data
// const subtractHandler = () => {
//     const newValue = parseInt(number.value) - 1  //replace value with STEP_AMOUNT to add by 5
//     number.value = newValue;

//     if (add.disabled === true){
//         add.disabled = false 
//     }

//     if (newValue <= MIN_NUMBER){
//         subtract.disabled = true 
//     }
// }
// // addHandle holds newValue data
// const addHandler = () => {
//     const newValue = parseInt(number.value) + 1 //replace value with STEP_AMOUNT to add by 5
//     number.value = newValue

//     if (subtract.disabled === true){ 
//         subtract.disabled = false 
//     }

//     if (newValue >= MAX_NUMBER){
//         add.disabled = true 
//     }
// }

// subtract.addEventListener('click', subtractHandler)
// add.addEventListener('click', addHandler)
