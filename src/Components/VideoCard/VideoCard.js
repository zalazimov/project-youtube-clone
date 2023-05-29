import { Link } from "react-router-dom";

export default function VideoCard({ video }) {
  if (!video.id) return;
  // if writing 'return' by itself and you don't want to return anything (example without 'null'), just write 'return' and that works. See line 4 above.
  return (
    <div>
      <Link className="text-decoration-none" to={`/video/${video.id}`}>
        <div>
          <img src={video.snippet.thumbnails.medium.url} alt="video" />
        </div>
        <h4 className="mt-2 text-black">{video.snippet.title}</h4>
      </Link>
    </div>
  );
}
