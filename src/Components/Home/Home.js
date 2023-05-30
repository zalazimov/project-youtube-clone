import React, { useState, useEffect } from "react";
import axios from "axios";
import { getVideos, getPopularVideos } from "../Fetch/Fetch";
import ListOfVideos from "../ListOfVideos/ListOfVideos";
import Modal from "../Modal/Modal";

export default function Home({ setError, error }) {
  const [vidList, setVidList] = useState([]);

  useEffect(() => {
    async function getPopularVideos() {
      try {
        const rawResult = await axios.get(
          `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2C%20contentDetails%2C%20statistics&chart=mostPopular&maxResults=21&regionCode=US&key=${process.env.REACT_APP_API_KEY}`
        );

        const result = rawResult.data.items;
        // console.log(result);

        setVidList(result);
      } catch (error) {
        console.log(error);
      }
    }
    getPopularVideos();
  }, []);

  return (
    <div>
      <Modal />
      <h2></h2>
      <ListOfVideos vidList={vidList} />
    </div>
  );
}

// To change the state for the user search to change the value of the array
// const getUserSearch = async () => {
//       try {
//         const data = await fetchUserSearch(input);
//         console.log(data);
//         setSearchVideos(data);
//       } catch (e) {
//         console.log(e);
//       }
//     };
//     getUserSearch();
//   }, [input]);

// The way to fectch the information from API when doing a search. This goes inside the useEffect.
// const getMostPopular = async () => {
//       try {
//         const data = await fetchMostPopular();
//         console.log(data);
//         setVideos(data);
//       } catch (e) {
//         console.log(e);
//       }
//     };
//     getMostPopular();
//   }, []);
