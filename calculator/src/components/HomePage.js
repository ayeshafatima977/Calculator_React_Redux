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
            <Link to="/calculator">Live-Demonstration-Calculator</Link>
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
        <p>ReactJS: To build the Basic Application.</p>
        <p>
          Redux:To store (global) information over using local component
          state.|Here we use Redux to store history of calculations
        </p>
        <p>Router:To control the display.</p>
        <p>CSS:To Style the Application.</p>

        <h2>Trying Out the App</h2>
        <p>
          To run it on your local machine clone into the repo, then type: npm
          install && npm start
        </p>
        <p>
          Then open http://localhost:3000 in your browser. If port 3000 is
          already in-use, the dev server may start on a different port. Look for
          the following log output: "Project is running at" to determine the
          correct port.
        </p>
        <p>React JS</p>
        <h2>Follow the Steps:Built the App</h2>
        <h3>REACT JS:To Build the App</h3>
        <p>Use “npx create-react-app” to start a new React project.</p>
        <p>
          Create a “Calculator” component using form which takes two input
          fields that can take in numeric values .
        </p>
        <p>
          Created a dropdown menu using select for user to select the desired
          operation
        </p>
        <p>
          Use state to keep track of the entered input values and current select
          value.
        </p>
        <p>
          Output to the user the result of the calculation onSubmit or onClick.
        </p>
        <h3>REDUX:Data Management</h3>
        <p>Use “npx install redux react-redux” to install redux libraries</p>
        <p>
          Redux is used here to store and output a list of prior calculations
          the user has done in and from React-Redux store.
        </p>
        <p>
          Create Redux Action, Redux Reducer for History and then with the help
          of reducer access the global state where all data will be stored-
          Global Store.
        </p>
        <h3>ROUTER:Control the Display</h3>
        <p>
          Use “npm install -react-router-dom” to install router-dom libraries
        </p>
        <p>
          Create a Home Page component and set a Nav bar and Link the components
          that you want to be displayed using route with the definitive path
        </p>
      </body>
    </>
  );
}

export default HomePage;
