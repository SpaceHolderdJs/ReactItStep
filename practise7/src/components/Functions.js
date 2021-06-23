import React, { useState } from "react";

export default function Functions(props) {
  const [counter, setCounter] = useState(0);

  const operation = (e) => {
    e.target.textContent === "-"
      ? setCounter(counter - 1)
      : setCounter(counter + 1);
  };

  return (
    <div>
      {counter}
      <button onClick={operation}>+</button>
      <button onClick={operation}>-</button>
    </div>
  );
}
