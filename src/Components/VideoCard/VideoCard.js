import { Link } from "react-router-dom";

export default function VideoCard({ video }) {
  if (!video.id) return;
  // if writing 'return' by itself and you don't want to return anything (example without 'null'), just write 'return' and that works. See line 4 above.
  return (
    <div>
      <Link className="text-decoration-none" to={`/video/${video.id}`}>
        <div className="container">
          <img
            className="rounded"
            src={video.snippet.thumbnails.medium.url}
            alt="video"
          />
          <h5 className="mt-2 text-black">
            {video.snippet.title.slice(0, 30)}...
          </h5>
          <h6 className="text-black fw-bold">{video.snippet.channelTitle}</h6>
        </div>
      </Link>
    </div>
  );
}
