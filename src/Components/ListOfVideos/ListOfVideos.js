// import Video from XXXXX

export default function ListOfVideos({ vidList }) {
  return (
    <div className="container">
      <div>
        {vidList.map((video) => {
          return <Video video={video} key={video.etag} />;
        })}
      </div>
    </div>
  );
}
