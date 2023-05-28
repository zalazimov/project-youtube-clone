import axios from "axios";

const URL = `https://youtube.googleapis.com/youtube/v3/`;

const KEY = process.env.REACT_APP_API_KEY;

export async function getVideos(search) {
  const rawResult = await axios.get(
    `${URL}search?part=snippet&maxResults=20&q=${search}&key=${KEY}`
  );
  result = rawResult.data.items;
  console.log(result);
}
