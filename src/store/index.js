// import required modules
import { createStore } from "redux";

/**
 * The reducer funciton is stored as an arrow function
 * @param state
 * @param action
 */
const reducerFn = (state = { counter: 0 }, action) => {
  // Synchronous Function
  // we should not mutate the original state

  if (action.type === "INC") {
    return { counter: state.counter + 1 };
  }

  if (action.type === "DEC") {
    return { counter: state.counter - 1 };
  }

  if (action.type === "ADD") {
    return { counter: state.counter + action.payload };
  }

  return state;
};

const store = createStore(reducerFn);

export default store;
