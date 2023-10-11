/* eslint-disable */
// scripts.js
/**
 * @param {number} dividend - number to be divided
 * @param {number} divider - number to be divided by
 */
const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");
const body = document.querySelector("[data-body]");
form.addEventListener("submit", (event) => {
/** 
 * The preventDefault() method of the Event interface tells the user agent that if the event 
 * does not get explicitly handled, its default action should not be taken as it normally would be.
 */
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  result.innerText = Math.floor(dividend / divider); // Added Math.floor ()

  if (!dividend || !divider) {
    result.innerText = "Division not performed. Both values are required in inputs. Try again";
    } else if (dividend < 0 || divider < 0) {
    result.innerText = "Division not performed. Invalid number provided. Try again";
    } else if (isNaN(dividend) || isNaN(divider)) {
    body.innerText = "Something critical went wrong. Please reload the page";
    } else {
    result.innerText = Math.floor(dividend / divider);
}});