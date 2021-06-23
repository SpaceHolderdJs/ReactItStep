import React, { useState } from "react";

export default function Form() {
  const [user, setUser] = useState({});

  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(user);
  };

  return (
    <div>
      <input type="text" name="name" onChange={handleChange} />
      <input type="text" name="surname" onChange={handleChange} />
      <h1>
        {user.name && user.name} {user.surname && user.surname}
      </h1>
    </div>
  );
}
