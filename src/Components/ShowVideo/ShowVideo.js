import React from "react";
import axios from "axios";
import Youtube from "react-youtube";
import { useParams } from "react-router";
import { useState, useEffect } from "react";

function ShowVideo() {
  const [video, setVideo] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function getSingleFetch() {
      try {
        const rawResult = await axios.get(
          `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${process.env.REACT_APP_API_KEY}`
        );
        const result = rawResult.data.items[0];

        console.log(result.snippet.title);

        setVideo(result);
      } catch (error) {
        console.log(error);
      }
    }

    getSingleFetch();
  }, [id]);

  return (
    <div>
      <Youtube videoId={id} />
      {video.snippet && (
        <>
          <h3 className="fw-bold">{video.snippet.title}</h3>
          <h4 className="channel-title">{video.snippet.channelTitle}</h4>
        </>
      )}
    </div>
  );
}

export default ShowVideo;
