import "./App.css";

import ReactReducerCounter from "./components/ReactReducerCounter";
import ReduxReducerCounter from "./components/ReduxToolkitCounter";
import Auth from "./ShoppingApp/Auth";

import react_redux_store from "./store/react-redux-store";
import redux_toolkit_store from "./store/redux-toolkit-store";
import { Provider } from "react-redux";

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

      {/* <Provider>
        <Auth></Auth>
      </Provider> */}
    </div>
  );
}

export default App;
