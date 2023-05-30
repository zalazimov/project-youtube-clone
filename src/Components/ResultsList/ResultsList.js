import React, { useState, useEffect } from "react";
import axios from "axios";
import VideoCard from "../VideoCard/VideoCard";
import Searchbar from "../Searchbar/Searchbar";
import { useNavigate, useParams } from "react-router";
import { Navigate } from "react-router";

function ResultsList() {
  const [vidList, setVidList] = useState([]);
  const { search } = useParams();
  const navigate = useNavigate();

  // console.log(search);
  useEffect(() => {
    async function getVideos() {
      try {
        const rawResult = await axios.get(
          `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=21&q=${search}&key=${process.env.REACT_APP_API_KEY}`
        );
        const result = rawResult.data.items;
        setVidList(result);
        // console.log(result);
      } catch (error) {
        console.log(error);
      }
    }

    getVideos();
  }, [search]);

  function handleClickedVideo(videoId) {
    navigate(`/video/${videoId}`);
  }

  return (
    <div className="container">
      <div className="row m-4">
        {vidList.map(
          (video) =>
            video.id.videoId && (
              // video.thumbnails &&
              <div
                onClick={() => handleClickedVideo(video.id.videoId)}
                key={video.etag}
                className="col-12 col-sm-6 col-md-4"
              >
                <VideoCard video={video} />
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default ResultsList;
