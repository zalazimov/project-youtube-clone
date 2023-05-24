import React, { useState, useEffect } from "react";
import axios from "axios";

function YouTubeComponent() {
  const [videoInfo, setVideoInfo] = useState(null);

  console.log(process.env.REACT_APP_YOUTUBE_API_KEY);

  // async function fetchData() {
  //   try {
  //     const response = await axios.get(
  //       `https://www.googleapis.com/youtube/v3/videos?key=${process.env.REACT_APP_YOUTUBE_API_KEY}&part=snippet&id=VIDEO_ID`
  //     );

  //     if (response.data.items.length > 0) {
  //       const videoData = response.data.items[0].snippet;
  //       setVideoInfo(videoData);
  //     }
  //   } catch (error) {
  //     console.error("Error fetching YouTube data:", error);
  //   }
  // }

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <div>
      {videoInfo && (
        <div>
          <h1>{videoInfo.title}</h1>
          <p>{videoInfo.description}</p>
          <img src={videoInfo.thumbnails.default.url} alt="Video Thumbnail" />
        </div>
      )}
    </div>
  );
}

export default YouTubeComponent;
