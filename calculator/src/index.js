import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Calculator from "./components/Calculator";
import ResultList from "./components/ResultList";
import historyReducer from "./reducers/history";
import { history } from "./actions/history";
import { createStore } from "redux";
// Connects global store-store to our entire Calculator-App
import { Provider } from "react-redux";
// import { ThemeProvider } from "./ThemeContext";
import { BrowserRouter as Router, Route } from "react-router-dom";

// //Created Combine Reducers
// const combineReducers = redux.combineReducers;
// const rootReducer = combineReducers({
//   lightTheme: lightThemeReducer,
//   darkTheme: darkThemeReducer,
// });

//Created a Global store Since store needs a reducer so we pass in the reducer in the store and import it
const store = createStore(
  historyReducer,
  //@Link :https://github.com/zalmoxisus/redux-devtools-extension
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//For testing only--We can run the instructions every time the store is updated using stores subscribe method.
// store.subscribe(() => console.log(store.getState()));

// Dispatch to send actions to our stores Reducer-It expects properly formatted action
//NOTE:This was causing unwanted empty bullets in the lists.Don't use dispatch in index use only in App
// store.dispatch(history(""));

ReactDOM.render(
  // <ThemeProvider>
  <Provider store={store}>
    <Router>
      <Route path="/" component={Calculator} exact />
      <Route path="/past-calculations" component={ResultList} />
    </Router>
    {/* <Calculator />,
    <ResultList /> */}
  </Provider>,
  // </ThemeProvider>
  document.getElementById("root")
);
