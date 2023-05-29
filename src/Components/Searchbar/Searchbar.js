import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router";

function Searchbar() {
  const [input, setInput] = useState("");

  const navigate = useNavigate();

  function handleChange(event) {
    setInput(event.target.value);
  }

  //   console.log(input);

  function handleSubmit(event) {
    event.preventDefault();
    navigate(`/resultslist/${input}`);
    setInput("");
  }

  return (
    <div>
      <form className="mx-5 my-2" onSubmit={handleSubmit}>
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
