import React, { useState, useEffect } from "react";
import axios from "axios";
import VideoCard from "../VideoCard/VideoCard";
import ModalError from "../ModalError/ModalError";
import { useNavigate, useParams } from "react-router";

function ResultsList() {
  const [vidList, setVidList] = useState([]);
  const [error, setError] = useState(false);
  const { search } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function getVideos() {
      try {
        const rawResult = await axios.get(
          `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=21&q=${search}&key=${process.env.REACT_APP_API_KEY}`
        );
        const result = rawResult.data.items;
        setVidList(result);
      } catch (error) {
        setError("Uh oh! Something went wrong.");
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
              <div
                onClick={() => handleClickedVideo(video.id.videoId)}
                key={video.etag}
                className="col-12 col-sm-6 col-md-4 mb-4"
              >
                <VideoCard video={video} />
              </div>
            )
        )}
        <ModalError
          isOpen={!!error}
          onClose={() => setError(false)}
          errorMessage={error}
        />
      </div>
    </div>
  );
}

export default ResultsList;
