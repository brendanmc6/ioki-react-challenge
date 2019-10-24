import * as React from "react";
import { render } from "react-dom";

import "./styles.css";

function App() {
  return (
    <div>
      <h2>
        If you want to be considered for the position, you must complete the
        following challenge.
      </h2>
      <hr />
      <h1>Refactor the renderGetter function so that it:</h1>
      <ul>
        <li>is completely type safe</li>
        <li>does not use type overloads</li>
        <li>works for both Class and Functional components</li>
        <li>does not require type arguments</li>
        <li>all tests, linting and typechecking pass with no errors</li>
      </ul>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
