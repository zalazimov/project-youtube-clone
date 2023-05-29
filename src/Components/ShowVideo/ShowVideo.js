import React from "react";
import axios from "axios";
import Youtube from "react-youtube";
import { useParams } from "react-router";
import { useState, useEffect } from "react";

function ShowVideo() {
  const [video, setVideo] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function getSingleFetch() {
      try {
        const rawResult = await axios.get(
          `https://youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${process.env.REACT_APP_API_KEY}`
        );
        const result = rawResult.data;
        console.log(result);
        setVideo(result);
      } catch (error) {
        console.log(error);
      }
    }

    getSingleFetch();
  }, [id]);

  const { title, channelTitle, publishedAt } = video.snippet;

  return (
    <div>
      <Youtube videoId={id} />
    </div>
  );
}

export default ShowVideo;
