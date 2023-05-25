import React, { useState } from "react";

function Searchbar() {
  const [input, setInput] = useState("");

  function handleChange(event) {
    setInput(event.target.value);
  }

  console.log(input);

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

// ------------------

// import React, { useState } from "react";

// function Home() {
//   const [searchVideo, setSearchVideo] = useState("");

//   return (
//     <div className="d-flex flex-column align-items-center">
//       <form className="form-control form-control-lg d-flex justify-content-center">
//         <input
//           type="text"
//           value={searchVideo}
//           placeholder="Search..."
//           onChange={(event) => setSearchVideo(event.target.value)}
//         />
//         <button className="btn btn-danger" type="submit">
//           Search
//         </button>
//       </form>

//       <div className="container mt-3 alert alert-dark" role="alert">
//         No Results yet! Please submit a search above!
//       </div>
//     </div>
//   );
// }
