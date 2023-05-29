import { Link } from "react-router-dom";

export default function VideoCard({ video }) {
  if (!video.id) return;

  return (
    <div>
      <Link to={`/video/${video.id}`}>
        <div>
          <img src={video.snippet.thumbnails.medium.url} alt="video" />
        </div>
        <h4>{video.snippet.title}</h4>
      </Link>
    </div>
  );
}
