export function createStore(reducer, initialState) { //
    let state = initialState //holds current state of Redux store
    let listeners = [] //array of functions to be called when state changes

    function subscribe(listener) { //fuction allows subsribing to store's state updates. Takes a listener function as parameter and adds it to the listeners array
        listeners.push(listener) //adds listener to listeners array
    }

    function dispatch(action) { //function to update state of store. Takes action as parameter and calls the reducer function with the current state and action as parameters. Updates state and calls listeners.
        state = reducer(state, action) //
        for (let i = 0; i < listeners.length; i++) { //loops through listeners array and calls each listener function.
            listeners[i]() //calls listener function
        }
    }

    function getState() { //function to get current state of store. Returns state. Used to get current state of store in Redux DevTools.
        return state
    }

    return { //returns object with functions to be used by Redux DevTool
        subscribe,
        dispatch,
        getState
    }
}