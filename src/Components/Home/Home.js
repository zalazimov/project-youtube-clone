import React, { useState, useEffect } from "react";
import { getVideos } from "../Fetch/Fetch";
import ListOfVideos from "../ListOfVideos/ListOfVideos";

export default function Home({ setError, error }) {
  const [vidList, setVidList] = useState([]);

  useEffect(() => {
    // xxxxxxxx
  }, [setError]);

  return (
    <div>
      <h2>Videos</h2>
      <ListOfVideos vidList={vidList} />
    </div>
  );
}
