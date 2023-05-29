import VideoCard from "../VideoCard/VideoCard";
import React from "react";

export default function ListOfVideos({ vidList }) {
  return (
    <div className="container">
      <div className="row">
        {vidList.map((video) => (
          <div
            key={video.etag}
            className="col-12 col-sm-6 col-md-4 mb-5"
            // onClick={handleOnClick}
          >
            <VideoCard video={video} />
          </div>
        ))}
      </div>
    </div>
  );
}

// export default function ListOfVideos({ vidList }) {
//   return (
//     <div className="container">
//       <div>
//         {vidList.map((video) => {
//           return <VideoCard video={video} key={video.etag} />;
//         })}
//       </div>
//     </div>
//   );
// }
