import axios from "axios";

const URL = `https://youtube.googleapis.com/youtube/v3/`;

const KEY = process.env.REACT_APP_API_KEY;

async function fetchPopularVideos() {
  try {
    const rawResult = await axios.get(
      `${URL}videos?part=snippet%2C%20contentDetails%2C%20statistics&chart=mostPopular&maxResults=20&regionCode=US&key=${KEY}`
    );

    const result = rawResult.data.items;
    return result;
  } catch (error) {
    console.log(error);
  }
}

export { fetchPopularVideos };
