import React from "react";
//Since we are only reading/accessing the data we need connect() to define relationship with props
import { connect } from "react-redux";
//We don't need actions since we are not adding/deleting any stuff here

function ResultList(props) {
  console.log("props", props);
  return (
    <>
      <h2>Past Calculations:</h2>
      <ul>
        {/* To output easily we use array maps method.Each newResult has a property called result -refer reducer  */}
        {props.pastHistory.map((output, index) => (
          <li key={index}>{output.result}</li>
        ))}
      </ul>
    </>
  );
}
// Therefore the above function ResultList will access our global state(below) should be able to output the bunch of <li> inside the ul representing its in our global state
//Use connect() to make our ResultList available via props to describe relationship with props to our redux store using connect() same as we did in Calculator.js

export default connect((state) => ({ pastHistory: state }))(ResultList);
