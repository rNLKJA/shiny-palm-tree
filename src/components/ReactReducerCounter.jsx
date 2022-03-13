import { useSelector, useDispatch } from "react-redux";
import { Button } from "@material-ui/core";

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
      <h1 style={{ color: "black" }}>Counter use react-redux</h1>
      <h2 style={{ fontSize: 40 }}>{react_redux_counter}</h2>

      <div>
        <Button
          color="primary"
          variant="outlined"
          style={{ width: 200 }}
          onClick={react_redux_increment}
        >
          Increment
        </Button>

        <Button
          color="primary"
          variant="outlined"
          style={{ width: 200 }}
          onClick={react_redux_decrement}
        >
          Decrement
        </Button>
        <Button
          color="primary"
          variant="outlined"
          style={{ width: 200 }}
          onClick={react_redux_addBy}
        >
          Add Value by 10
        </Button>
      </div>
    </div>
  );
}

export default ReactReducerCounter;
