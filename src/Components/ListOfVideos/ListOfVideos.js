import VideoCard from "../VideoCard/VideoCard";

export default function ListOfVideos({ vidList }) {
  return (
    <div className="container">
      <div>
        {vidList.map((video) => {
          return <VideoCard video={video} key={video.etag} />;
        })}
      </div>
    </div>
  );
}
