import { useSelector, useDispatch } from "react-redux";
import { actions } from "../store/redux-toolkit-store";

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
      <h1>Counter use @redux/toolkit</h1>
      <h2>{redux_toolkit_counter}</h2>

      <button onClick={redux_toolkit_increment}>Increment</button>
      <button onClick={redux_toolkit_decrement}>Decrement</button>
      <button onClick={redux_toolkit_addBy}>Add Value by 10</button>
    </div>
  );
}

export default ReactReducerCounter;
