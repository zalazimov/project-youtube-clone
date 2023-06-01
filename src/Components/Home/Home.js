import React, { useState, useEffect } from "react";
import axios from "axios";
import ListOfVideos from "../ListOfVideos/ListOfVideos";
import ModalError from "../ModalError/ModalError";

export default function Home() {
  const [vidList, setVidList] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getPopularVideos() {
      try {
        const rawResult = await axios.get(
          `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2C%20contentDetails%2C%20statistics&chart=mostPopular&maxResults=21&regionCode=US&key=${process.env.REACT_APP_API_KEY}`
        );

        const result = rawResult.data.items;

        setVidList(result);
      } catch (error) {
        setError("Uh oh! Something went wrong.");
      }
    }
    getPopularVideos();
  }, []);

  return (
    <div>
      <ListOfVideos vidList={vidList} />
      <ModalError
        isOpen={!!error}
        onClose={() => setError(false)}
        errorMessage={error}
      />
    </div>
  );
}
