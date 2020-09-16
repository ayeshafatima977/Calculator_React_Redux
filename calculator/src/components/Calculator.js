import React, { useState, useEffect } from "react";
import "./Calculator.css";
//Link Redux to our react-component
import { connect } from "react-redux";
import { history } from "../actions/history";
// import historyReducer from "../reducers/history";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../components/globalStyles";
import { lightTheme, darkTheme } from "../components/Theme";

function Calculator(props) {
  /* De-constructor 
   Step1:Setup for state to keep track of user input value.Use state function is returning two values in an array and userInput is first variable which holds the state value (i.e) it will be assigned first item in an array 
  and set User input is  a function that we use to update state value in the array
  */
  const [userInput1, setUserInput1] = useState("0"); //Let Default value be empty/zero
  const [userInput2, setUserInput2] = useState("0"); //Let Default value be empty/zero
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState("0");
  const [newHistory, setNewHistory] = useState("0");
  const [historyList, setHistoryList] = useState([]);

  //--Borrowed Snippet for Theme Starts--
  //@Link: https://www.smashingmagazine.com/2020/04/dark-mode-react-apps-styled-components/
  /*In order for us to create a toggling method, we need a state that holds our theme’s initial color value. 
  So, we create a theme state, and set the initial state to light, using the useState hook.Now, for the toggling functionality.
  The themeToggler method uses a ternary operator to check the state of the theme, and it toggles either dark or light based on the value of the condition.*/
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  //--Borrowed Snippet for Theme Ends--

  //SECOND METHOD:USE-EFFECT()
  //What do you want to happen when variable changes when using UseEffect--> You want your result state updated
  //We don't want a history item added every time there is a change, so that should still be a function triggered by form submit
  //@Courtesy-Thankyou! Kristzina Pap for troubleshooting the error undefined adn troubleshooting UseEffect() function

  useEffect(() => {
    // Function for selection of operations
    switch (operation) {
      case "+":
        //Number data type is used to enforce the input as Number otherwise sometimes it shows undefined if it takes as a string.
        setResult((Number(userInput1) + Number(userInput2)).toFixed(5));
        break;
      case "-":
        setResult(Number(userInput1) - Number(userInput2).toFixed(5));
        break;
      case "*":
        setResult(Number(userInput1) * Number(userInput2).toFixed(5));
        break;
      case "/":
        setResult(Number(userInput1) / Number(userInput2).toFixed(5));
        break;
      default:
        break;
    }

    // To see the output in expression/equation form
    setNewHistory(`${userInput1}${operation}${userInput2} = ${result}`);
    /* Testing: console.log(Number(userInput1));console.log(Number(userInput2)); console.log(Calculate);*/

    // When below variable changes useEffect is triggered
  }, [userInput1, userInput2, operation, result]);

  const Calculate = (eventResult) => {
    eventResult.preventDefault();

    // 1)Passing our local state:result 2) to our action:history 3) that is operated by our reducer 4)to update our store
    //Because of connect() and <Provider> we have access to dispatch via our props
    props.dispatch(history(newHistory));
    // Creating a temporary historyList and add the updated values to newHistory  as did previously for reducers
    const tempHistory = [...historyList];
    tempHistory.push(newHistory);
    //Since setHistory is a function we have assigned temp history to it
    setHistoryList(tempHistory);
    return historyList;
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <button onClick={themeToggler}>Switch Theme</button>

        <h1 className="header">Simple Calculator</h1>
        <form className="myForm" onSubmit={Calculate}>
          <label htmlFor="input1">
            <strong>Enter First Number</strong>
          </label>
          <input
            type="number"
            id="input1"
            /*Step2:To keep track of changes in realtime and grab the event on change we use fat arrow function.
        So whenever  text input is changed we setUserInput updates.We want to grab the value of the targeted input.
        Test:Go to Components section and select calculator component and type in any value in input it should display the value in state
        */
            onChange={(e) => {
              setUserInput1(e.target.value);
            }}
            value={userInput1}
          />
          {/* Testing: 
        <p>
          <strong>You have entered:</strong>
          <em>{userInput1}</em>
        </p>*/}
          <label htmlFor="input2">
            <strong>Enter Second Number</strong>
          </label>
          <input
            type="number"
            id="input2"
            onChange={(event) => {
              setUserInput2(event.target.value);
            }}
            value={userInput2}
          />
          {/* Testing:
        <p>
          <strong>You have entered:</strong>
          <em>{userInput2}</em>
        </p> */}
          <label htmlFor="operation" className="dropdownSelect">
            <strong>Select Arithmetic Operation</strong>
            <select
              onChange={(eventResult) => {
                setOperation(eventResult.target.value);
              }}
            >
              <option value="">--Select an Operation--</option>
              <option value="+">+</option>
              <option value="-">-</option>
              <option value="*">*</option>
              <option value="/">/</option>
            </select>
          </label>
          <input className="btn" type="submit" value="Calculate" />
          <p>
            <strong>Result:</strong>
            <em>{result}</em>
          </p>
        </form>
      </>
    </ThemeProvider>
  );
}

export default connect(
  //We setup a map state to props function
  //State from Redux store represented in props as
  (state) => {
    return { pastHistory: state };
  }
)(Calculator);
