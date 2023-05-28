import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
// import YouTube from "react-youtube";
import React, { useState, useEffect } from "react";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Modal from "./Components/Modal/Modal";
import Navbar from "./Components/Navbar/Navbar";
import ResultsList from "./Components/ResultsList/ResultsList";
import ShowVideo from "./Components/ShowVideo/ShowVideo";

// import YouTubeComponent from "./Components/YoutubeComponent/YoutubeComponent";

import "./App.css";

export default function App() {
  //Create an error state
  const [error, setError] = useState(false);

  // const [videoId, setVideoId] = useState([]);

  // async function fetchData() {
  //   try {
  //     const response = await axios.get(
  //       `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=ariana%20grande&type=video&key=${process.env.REACT_APP_API_KEY}`
  //     );

  //     // if (response.data.items.length > 0) {
  //     //   // Assuming you want to play the first video in the search results
  //     //   // const firstVideoId = response.data.items[0].id.videoId;
  //     //   setVideoId(response.data.items);
  //     // }
  //     console.log(response.data.items)
  //   } catch (error) {
  //     console.error("Error fetching YouTube data:", error.response);
  //   }
  // }

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // console.log(process.env.REACT_APP_API_KEY);

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

      {/* {videoId && (
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube Video Player"
          frameBorder="0"
          allowFullScreen
        />
      )} */}
    </div>
  );
}

// export default App;
