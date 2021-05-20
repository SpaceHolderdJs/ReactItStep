import React from "react";

const Operation = (props) => {
  const { a1, a2, opr } = props;

  if (a1 && a2 && opr) {
    const res = {
      "+": a1 + a2,
      "-": a1 - a2,
      "*": a1 * a2,
      "/": a1 / a2,
    };

    return (
      <div>
        <h1>
          {a1} {opr} {a2} = {res[opr]}
        </h1>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Invalid data!</h1>
      </div>
    );
  }
};

export default Operation;
