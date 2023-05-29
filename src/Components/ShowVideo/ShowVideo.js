import React from "react";

function ShowVideo() {
  return (
    <div>
      {videoId && (
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube Video Player"
          allowFullScreen
        />
      )}
    </div>
  );
}

export default ShowVideo;
