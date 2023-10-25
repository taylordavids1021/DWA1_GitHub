export const increment = () => { //creates action object with type 'increment'

  console.log('increment')
  return {
      type: 'INCREMENT'
  }

}

export const decrement = () => { //creates action object with type 'decrement'
  
  console.log('decrement')
  return {
      type: 'DECREMENT'
  }

}

export const reset = () => { //creates action object with type 'reset'

  console.log('reset')
  return {
      type: 'RESET'
  }

}