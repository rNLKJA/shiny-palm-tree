# shiny-palm-tree

This repository is created to learn react-redux, redux, reducer function for future [Cradle Project](https://github.com/chuangyu-hscy/cradle-waddle) application build.

The learning path is followed by freeCodeCamp [Redux Tutorial - Beginner to Advanced](https://www.youtube.com/watch?v=zrs7u6bdbUw&t=142s) youtube video.

## Completed Topic
- [x] Counter App with react-redux
- [ ] Using Redux Toolkit
- [ ] Shopping Cart Project
- [ ] Incrementing and Decrementing Items From Cart
- [ ] Adding Logout State
- [ ] Using Firebase with Redux
- [ ] Sending asynchronous HTTP Requests with Redux
- [ ] Adding Notifications with Material UI
- [ ] Adding Notification slice state
- [ ] Using Redux Thunk Pattern
- [ ] Creating Thuk Pattern with redux
- [ ] Sending GET HTTP request with Redux

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

Create a store file, in this repo, the store object is store under `./src/store/index.js`.

```javascript
# each reducer store will follow this basic structure
import  { createStore } from 'redux';

/**
* The reducer function is stored as an arrow function
* @param state: contain all state values
* @param action: {type: Stirng, payload: any} the function act differently based on action type
*/
const reducer = (state = {target: value}, action) => {
  return;
} 

const store = createStore(reducerFn);

export default store;
```
