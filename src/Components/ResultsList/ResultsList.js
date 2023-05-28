import React, { useState, useEffect } from "react";
import axios from "axios";
import VideoCard from "../VideoCard/VideoCard";
import Searchbar from "../Searchbar/Searchbar";
import { useParams } from "react-router";

function ResultsList() {
  const [vidList, setVidList] = useState([]);
  const { search } = useParams();

  useEffect(() => {
    async function getVideos(search) {
      try {
        const rawResult = await axios.get(
          `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${search}&key=${process.env.REACT_APP_API_KEY}`
        );
        const result = rawResult.data.items;
        setVidList(result);
        // console.log(result);
        // return result ----Maybe we need this??
      } catch (error) {
        // con/sole.log(error);
      }
    }

    getVideos();
  }, [search]);

  return (
    <div>
      {vidList.map((video) => {
        return <VideoCard video={video} key={video.etag} />;
      })}
    </div>
  );
}

export default ResultsList;
