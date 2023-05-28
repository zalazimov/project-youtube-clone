import React, { useState } from "react";

function Searchbar() {
  const [input, setInput] = useState("");

  function handleChange(event) {
    setInput(event.target.value);
  }

  //   console.log(input);

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="Search..."
        ></input>
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default Searchbar;
