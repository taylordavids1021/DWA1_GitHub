// ------------------------------------------------ Import data from js files in modules folder -------------------------------- //
import { selectors, getHtmlElement } from "./dom.js";
import { BOOKS_PER_PAGE } from "./data.js";
// ------------------------------------------------ Example of an abstruction ------------------------------------------------ //
/**
 * @param {Array} prop
 * @param {Number} [target]
 * @returns {Object}
 */
export const loadedTracker = (prop) => {
  if (typeof prop !== "object" || prop === null) {
    throw new Error(
      `${prop} needed to be an array. Expected an array, received ${typeof prop}.`
    );
  }
  let tracker = 0;
  const increase = () => {
    tracker += BOOKS_PER_PAGE;
  };

  const refValue = () => {
    return tracker;
  };
// ------------------------------------------------ Check the books in array --------------------------- //
  const checker = () => {
    let books_Left = prop.length - BOOKS_PER_PAGE - tracker;
    let button_Text = books_Left > 0 ? books_Left : 0;
    const button = getHtmlElement(".list__remaining", selectors.load_More);
    button.textContent = `(${button_Text})`;
    return button;
  };
// ------------------------------------------------ Load books ----------------------------------------------- //
  const loaded = () => {
    let books_Loaded = BOOKS_PER_PAGE + tracker;
    return books_Loaded;
  };

  return {
    increase,
    checker,
    refValue,
    loaded,
  };
};

// ------------------------------------ END OF TRACKER ------------------------------------ //
