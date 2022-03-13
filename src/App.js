import "./App.css";

import ReactReducerCounter from "./components/ReactReducerCounter";
import ReduxReducerCounter from "./components/ReduxToolkitCounter";

import react_redux_store from "./store/react-redux-store";
import redux_toolkit_store from "./store/redux-toolkit-store";
import shopping_app_store from "./store/ShoppingApp/shopping-store";
import { Provider } from "react-redux";
import ShoppingApp from "./components/ShoppingApp";

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

      <Provider store={shopping_app_store}>
        <ShoppingApp />
      </Provider>
    </div>
  );
}

export default App;
