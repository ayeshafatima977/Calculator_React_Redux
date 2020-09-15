import React, { useState } from "react";
import "./Calculator.css";
//Link Redux to our react-component
import { connect } from "react-redux";
import { history } from "../actions/history";
import historyReducer from "../reducers/history";

function Calculator(props) {
  /* De-constructor 
   Step1:Setup for state to keep track of user input value.Use state function is returning two values in an array and userInput is first variable which holds the state value (i.e) it will be assigned first item in an array 
  and set User input is  a function that we use to update state value in the array
  */
  const [userInput1, setUserInput1] = useState(""); //Let Default value be empty
  const [userInput2, setUserInput2] = useState(""); //Let Default value be empty
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState("");

  // Function for selection of operations

  const Calculate = (eventResult) => {
    eventResult.preventDefault();
    // 1)Passing our local state:result 2) to our action:history 3) that is operated by our reducer 4)to update our store
    //Because of connect() and <Provider> we have access to dispatch via our props
    props.dispatch(history(result));

    switch (operation) {
      case "Addition":
        // .toFixed is used here to have only 5 decimal values and Number data type is used to enforce the input as Number
        // otherwise sometimes it shows undefined if it takes as a string.
        setResult((Number(userInput1) + Number(userInput2)).toFixed(5));
        break;
      case "Subtraction":
        setResult((Number(userInput1) - Number(userInput2)).toFixed(5));
        break;
      case "Multiplication":
        setResult((Number(userInput1) * Number(userInput2)).toFixed(5));
        break;
      case "Division":
        setResult((Number(userInput1) / Number(userInput2)).toFixed(5));
        break;
      default:
        break;
    }
    /* Testing: 
    console.log(Number(userInput1));
    console.log(Number(userInput2));
    console.log(Calculate);*/
  };
  return (
    <div className="mainContainer">
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
            <option value="Addition">Addition</option>
            <option value="Subtraction">Subtraction</option>
            <option value="Multiplication">Multiplication</option>
            <option value="Division">Division</option>
          </select>
          {/*Testing: 
          <p>
            <strong>You have entered:</strong>
            <em>{operation}</em>
          </p> */}
        </label>
        <input className="btn" type="submit" value="Calculate" />
        <p>
          <strong>Result:</strong>
          <em>{result}</em>
        </p>
        {/* <p>
          <strong>Past Calculations:</strong>
          <em>{result}</em>
        </p> */}
      </form>
    </div>
  );
}

export default connect(
  //We setup a map state to props function
  //State from Redux store represented in props as
  (state) => {
    return { pastHistory: state };
  }
)(Calculator);
