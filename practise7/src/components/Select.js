import React, { useState } from "react";

export default function Select(props) {
  const { cars, update } = props;

  const handleChange = (e) => {
    update(e.target.value);
  };

  return (
    <div>
      <select onChange={handleChange}>
        {cars && cars.map((e, i) => <option key={i}>{e}</option>)}
      </select>
    </div>
  );
}
