import React from "react";
import ReactDOM from "react-dom";
import RecursiveProperty from "./RecursiveProperty";
import testJson from "./file";

function App() {
  return (
    <div className="App">
      <RecursiveProperty property={testJson} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
