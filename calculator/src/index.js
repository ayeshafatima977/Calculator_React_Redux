import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Calculator from "./components/Calculator";
import { createStore } from "redux";
import historyReducer from "./reducers/history";
import { history } from "./actions/history";
// Connects global store-store to our entire Calculator-App
import { Provider } from "react-redux";

//Created a Global store Since store needs a reducer so we pass in the reducer in the store and import it
const store = createStore(
  historyReducer,
  //@Link :https://github.com/zalmoxisus/redux-devtools-extension
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
//For testing only--We can run the instructions every time the store is updated using stores subscribe method.
store.subscribe(() => console.log(store.getState()));

// Dispatch to send actions to our stores Reducer-It expects properly formatted action
store.dispatch(history("Past Calculations"));

ReactDOM.render(
  <Provider store={store}>
    <Calculator />,
  </Provider>,
  document.getElementById("root")
);
