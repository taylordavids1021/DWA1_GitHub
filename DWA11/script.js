window.addEventListener('load', () => {
  const MAX_NUMBER = 10;
  const MIN_NUMBER = -10;

  const add = document.querySelector('[data-add-sign]');
  const number = document.querySelector('[data-number-input]')
  const subtract = document.querySelector('[data-subtract-sign]')
  const reset = document.querySelector('[data-reset-input]')


  /**Function that checks if we passed the Limit
   * This is a from of Abstraction
   */
  const checkPassedLimits = (number, newValue) => {

      if (number <= MIN_NUMBER) {
          add.disabled = false;
      }
      if (newValue >= MAX_NUMBER) {
          add.disabled = true;
          subtract.disabled = false;
      }

      if (newValue <= MIN_NUMBER) {
          subtract.disabled = true
          add.disabled = false;
      }
  }

  add.addEventListener("click", () => {
      myStore.publish({ type: 'ADD' });
      console.log(myStore.getState())   

      const newValue = parseInt(number.value) + 1;
      number.value = newValue
      checkPassedLimits(number.value, newValue)
  })

  subtract.addEventListener('click', () => {
      myStore.publish({ type: 'MINUS' });
      console.log(myStore.getState())

      const newValue = parseInt(number.value) - 1;
      number.value = newValue
      checkPassedLimits(number.value, newValue)
  })

  reset.addEventListener('click', () => {
      myStore.publish({ type: 'RESET' });
      console.log(myStore.getState())

      number.value = 0
      popup.style.display = 'block';

      // Hide the popup after 2 seconds
      setTimeout(function () {
          popup.style.display = 'none';
      }, 1000);
  })

  const resetHandler = () => {
    const newValue = RESET_VALUE;
    elements.number.value = newValue;
    elements.alert.open = true;
  }; 
  /**Implementing My Own Redux */
  const store = (reducer) => {
      let state;
      let handlers = [];

      const fetchState = () => state; //Returns the current state of the App

      const publish = (action) => { //Based on Action given it runs action then save State, then add newState on the Handlers Array 
          state = reducer(state, action);
          handlers.unshift(state);

          console.log(handlers);
      };

      const getState = () => fetchState();  

      return {
          getState,
          publish
      };
  };



  const reducer = (state = 0, action) => {
      switch (action.type) {
          case 'ADD':
              return state + 1;
          case 'MINUS':
              return state - 1;
          case 'RESET':
              return state = 0;
          default:
              return state;
      }
  };

  const myStore = store(reducer);

})