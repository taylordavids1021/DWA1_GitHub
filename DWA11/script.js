import { createStore } from "./modules/store.js";
import { reducer } from "./modules/reducers";
import { increment, decrement, reset } from "./modules/actions";


document.addEventListener('DOMContentLoaded', function() {
    const MAX_NUMBER = 15;
    const MIN_NUMBER = -5;
  
    const number = document.querySelector('[data-key="number"]');
    const subtract = document.querySelector('[data-key="subtract"]');
    const add = document.querySelector('[data-key="add"]');
    const reset = document.querySelector('[data-key="reset"]');
  
    const addHandler = () => {
      let newValue = parseInt(number.value) + 1;
      number.value = newValue;
  
      if (add.disabled === true) {
        add.disabled = false;
      }
  
      if (newValue >= MAX_NUMBER) {
        add.disabled = true;
      }
    };
  
    const subtractHandler = () => {
      let newValue = parseInt(number.value) - 1;
      number.value = newValue;
  
      if (subtract.disabled === true) {
        subtract.disabled = false;
      }
  
      if (newValue <= MIN_NUMBER) {
        subtract.disabled = true;
      }
    };
  
    const resetHandler = () => {  // Function to handle the reset button click
      const confirmed = window.confirm("Tally reset"); // Displays a confirmation dialog and store the user's response
      if (confirmed) {  // If the user confirmed the reset
        number.value = "0";   // Reset the value of the number input to "0"
        add.disabled = false;  // Enable the add button
        subtract.disabled = false;  // Enable the subtract button
      }
    };
  
    add.addEventListener('click', addHandler);
    subtract.addEventListener('click', subtractHandler);
    reset.addEventListener('click', resetHandler);
  });