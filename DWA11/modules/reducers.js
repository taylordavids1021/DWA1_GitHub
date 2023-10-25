const initialState = { //declares initial state
  count: 0 //sets count to 0
}

export function reducer(state = initialState, action) { //creates function to update state based on dispatched actions
  switch (action.type) { //switch statement to determine which action to take
      
      case 'INCREMENT': //if action is increment, add 1 to count
          return { //returns new state
              ...state, //spreads state to create shallow copy of exsisting stae object
              count: state.count + 1 //modifies count by 1
          }
      case 'DECREMENT': //if action is decrement, subtract 1 from count
          return { //returns new state
              ...state, //spreads state to create shallow copy of exsisting stae object
              count: state.count - 1 //modifies count by 1
          }

      case 'RESET': //if action is reset, set count to 0
          return { //returns new state
              ...state, //spreads state to create shallow copy of exsisting stae object
              count: 0 //modifies count by 1
          }
       
      
      default: //if action is not recognized, 
          return state //returns state
  }
}