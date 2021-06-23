import "./App.css";
import Main from "./components/Main";
import Functions from "./components/Functions";
import Form from "./components/Form";
import Select from "./components/Select";
import React, { useState } from "react";

function App() {
  const [value, setValue] = useState("");

  return (
    <div className="App">
      <h1>Hello</h1>
      <Main />
      <Functions />
      <Form />
      <Select cars={["Ford", "Audi", "Toyota"]} update={setValue} />
      {value && <h1>{value}</h1>}
    </div>
  );
}

export default App;
