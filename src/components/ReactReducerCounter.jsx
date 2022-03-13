import { useSelector, useDispatch } from "react-redux";

function ReactReducerCounter() {
  /* ---------------------------   react-redux   ------------------------------------- */
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
