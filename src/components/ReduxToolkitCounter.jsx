import { useSelector, useDispatch } from "react-redux";
import { actions } from "../store/redux-toolkit-store";
import { Button } from "@material-ui/core";

function ReactReducerCounter() {
  /* --------------------------- @reduxjs/toolkit------------------------------------- */
  const dispatch = useDispatch();

  const redux_toolkit_counter = useSelector((state) => state.counter);

  const redux_toolkit_increment = () => {
    dispatch(actions.increment());
  };

  const redux_toolkit_decrement = () => {
    dispatch(actions.decrement());
  };

  const redux_toolkit_addBy = () => {
    dispatch(actions.addBy(10));
  };

  return (
    <div className="@reduxjs/toolkit">
      <h1 style={{ color: "black" }}>Counter use @redux/toolkit</h1>
      <h2 style={{ fontSize: 40 }}>{redux_toolkit_counter}</h2>

      <Button
        color="primary"
        variant="outlined"
        style={{ width: 200 }}
        onClick={redux_toolkit_increment}
      >
        Increment
      </Button>
      <Button
        color="primary"
        variant="outlined"
        style={{ width: 200 }}
        onClick={redux_toolkit_decrement}
      >
        Decrement
      </Button>
      <Button
        color="primary"
        variant="outlined"
        style={{ width: 200 }}
        onClick={redux_toolkit_addBy}
      >
        Add Value by 10
      </Button>
    </div>
  );
}

export default ReactReducerCounter;
