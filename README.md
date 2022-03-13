# shiny-palm-tree

This repository is created to learn react-redux, redux, reducer function for future [Cradle Project](https://github.com/chuangyu-hscy/cradle-waddle) application build.

The learning path is followed by freeCodeCamp [Redux Tutorial - Beginner to Advanced](https://www.youtube.com/watch?v=zrs7u6bdbUw&t=142s) youtube video.

## Completed Topic
- [x] Counter App with react-redux
- [x] Using Redux Toolkit
- [x] Shopping Cart Project

## Use `react-redux`
Before use `react-redux`, make sure that both `redux` and `react-redux` are installed locally.

```javascript
# to use react-redux globally, we need to import a redux Provider to wrap the main application
# so in index.js file
import { Provider } from 'react-redux';
import store from './store/index'; # hence we need to provide a store object to the Provider

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root"),
);
```

or use provider separately for given required components, e.g.:

```javascript
function App() {
  return (
    <div className="App">
      <Provider store={react_redux_store}>
        <ReactReducerCounter />
      </Provider>

      <hr />

      <Provider store={redux_toolkit_store}>
        <ReduxReducerCounter />
      </Provider>

      <hr />
    </div>
  );
}
```

To create a store file, in this repo, the store object is store under `./src/store/`. Make sure export the store object as default.
```javascript
// ----------- use react-redux ----------- 
import { createStore } from "redux";

const reducerFn = (state = { counter: 0 }, action) => {
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

// ----------- use redux/toolkit ----------- 
import { useSelector, useDispatch } from "react-redux";

function ReactReducerCounter() {
  const dispatch = useDispatch();

  const react_redux_counter = useSelector((state) => state.counter);

  const react_redux_increment = () => {
    dispatch({ type: "INC" });
  };

  const react_redux_decrement = () => {
    dispatch({ type: "DEC" });
  };

  const react_redux_addBy = () => {
    dispatch({ type: "ADD", payload: 10 });
  };

  return (
    <div className="react-reducer">
      <h1>Counter use react-redux</h1>
      <h2>{react_redux_counter}</h2>

      <button onClick={react_redux_increment}>Increment</button>
      <button onClick={react_redux_decrement}>Decrement</button>
      <button onClick={react_redux_addBy}>Add Value by 10</button>
    </div>
  );
}

export default ReactReducerCounter;
```
