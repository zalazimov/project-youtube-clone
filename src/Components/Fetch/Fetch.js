import axios from "axios";

const URL = `https://youtube.googleapis.com/youtube/v3/`;

const KEY = process.env.REACT_APP_API_KEY;

// async function getVideos() {
//   try {
//     const rawResult = await axios.get(
//       `${URL}search?part=snippet&maxResults=20&q=${search}&key=${KEY}`
//     );
//     const result = rawResult.data.items;
//     // console.log(result);
//     // return result ----Maybe we need this??
//   } catch (error) {
//     // con/sole.log(error);
//   }
// }

async function fetchPopularVideos() {
  try {
    const rawResult = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2C%20contentDetails%2C%20statistics&chart=mostPopular&maxResults=20&regionCode=US&key=${KEY}`
    );

    const result = rawResult.data.items;
    // console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
}

export { fetchPopularVideos };
