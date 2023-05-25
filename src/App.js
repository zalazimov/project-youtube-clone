import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import YouTube from "react-youtube";
import React, { useState, useEffect } from "react";

import About from "./Components/About/About";
import Home from "./Components/Home/Home";
// import Modal from "./Components/Modal/Modal";
import Navbar from "./Components/Navbar/Navbar";
// import ResultsList from "./Components/ResultsList/ResultsList";
// import ShowVideo from "./Components/ShowVideo/ShowVideo";
// import YouTubeComponent from "./Components/YoutubeComponent/YoutubeComponent";

import "./App.css";

export default function App() {
  const [videoId, setVideoId] = useState([]);

  async function fetchData() {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}&part=snippet&type=video&q=cats`
      );

      if (response.data.items.length > 0) {
        //   // Assuming you want to play the first video in the search results
        //   // const firstVideoId = response.data.items[0].id.videoId;
        setVideoId(response.data.items);
      }
      // console.log(response.data.items);
    } catch (error) {
      console.error("Error fetching YouTube data:", error.response);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  // console.log(process.env.REACT_APP_API_KEY);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          {/* <Route path="/videos/:id" element={<ShowVideo />} /> */}
        </Routes>
      </Router>

      {videoId && (
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube Video Player"
          frameBorder="0"
          allowFullScreen
        />
      )}
    </div>
  );
}

// export default App;
