import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Modal from "./Components/Modal/Modal";
import Navbar from "./Components/Navbar/Navbar";
import ResultsList from "./Components/ResultsList/ResultsList";
import ShowVideo from "./Components/ShowVideo/ShowVideo";

import "./App.css";

export default function App() {
  //Create an error state
  const [error, setError] = useState(false);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<Home error={error} setError={setError} />}
          />
          <Route path="/About" element={<About />} />
          <Route path="/resultslist/:search" element={<ResultsList />} />
          <Route path="/video/:id" element={<ShowVideo />} />
          <Route path="*" element={<ErrorPage />} />
          {/* <Route path="/videos/:id" element={<ShowVideo />} /> */}
        </Routes>
      </Router>
    </div>
  );
}
