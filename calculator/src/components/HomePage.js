import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <nav>
        <h2>Calculator </h2>
        <ul>
          <li>
            <Link to="/">About-App </Link>
          </li>

          <li>
            <Link to="/calculator">Live-Demonstration-Calculator</Link>
          </li>
          <li>
            <Link to="/past-calculations">History of Calculations</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default HomePage;
