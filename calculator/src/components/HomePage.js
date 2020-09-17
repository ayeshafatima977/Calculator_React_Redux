import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      {/* Navigation Bar */}
      <nav>
        <h2>Calculator </h2>
        <ul>
          <li>
            {/* Added  target=blank so as to open new tab every time user press in a ink */}

            <Link to="/">About-App </Link>
          </li>
          <li>
            <Link to="/calculator" target="blank">
              Live-Demonstration-Calculator
            </Link>
          </li>
          <li>
            <Link to="/past-calculations" target="blank">
              History of Calculations
            </Link>
          </li>
        </ul>
      </nav>
      <body>
        <h2>About the App</h2>
        <p>
          This is a simple arithmetic calculator which requires user to enter
          two inputs and select the desired operation.
        </p>
        <p>This application was built using following libraries:</p>
        <ol>
          <li>ReactJS: To build the Basic Application.</li>
          <li>
            Redux:To store (global) information over using local component
            state.|Here we use Redux to store history of calculations
          </li>
          <li>Router:To control the display.</li>
          <li>CSS:To Style the Application.</li>
        </ol>
        <ol>
          <h2>Trying Out the App</h2>
          <li>
            To run it on your local machine clone into the repo, then type: npm
            install && npm start
          </li>
          <li>
            Then open http://localhost:3000 in your browser. If port 3000 is
            already in-use, the dev server may start on a different port. Look
            for the following log output: "Project is running at" to determine
            the correct port.
          </li>
        </ol>
        <h2>Follow the Steps:Built the App</h2>
        <h3>REACT JS:To Build the App</h3>
        <ol>
          <li>Use “npx create-react-app” to start a new React project.</li>
          <li>
            Create a “Calculator” component using form which takes two input
            fields that can take in numeric values .
          </li>
          <li>
            Created a dropdown menu using select for user to select the desired
            operation
          </li>
          <li>
            Use state to keep track of the entered input values and current
            select value.
          </li>
          <li>
            Output to the user the result of the calculation onSubmit or
            onClick.
          </li>
        </ol>
        <h3>REDUX:Data Management</h3>
        <ol>
          <li>
            Use “npx install redux react-redux” to install redux libraries
          </li>
          <li>
            Redux is used here to store and output a list of prior calculations
            the user has done in and from React-Redux store.
          </li>
          <li>
            Create Redux Action, Redux Reducer for History and then with the
            help of reducer access the global state where all data will be
            stored- Global Store.
          </li>
        </ol>
        <h3>ROUTER:Control the Display</h3>
        <ol>
          <li>
            Use “npm install -react-router-dom” to install router-dom libraries
          </li>
          <li>
            Create a Home Page component and set a Nav bar and Link the
            components that you want to be displayed using route with the
            definitive path
          </li>
        </ol>
      </body>
    </>
  );
}

export default HomePage;
