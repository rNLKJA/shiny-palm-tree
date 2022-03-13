// import required modules
import { createStore } from "redux";

/**
 * The reducer function is stored as an arrow function
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

const react_redux_store = createStore(reducerFn);

export default react_redux_store;
