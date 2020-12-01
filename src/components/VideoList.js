import React from "react";
import Videoitem from "./VideoItem";

const VideoList = ({ videos, onSelectVideo }) => {
  const renderedVideos = videos.map((video) => {
    return (
      <Videoitem
        video={video}
        selectedVideo={onSelectVideo}
        key={video.id.videoId}
      />
    );
  });
  return <div className="ui relaxed divided list">{renderedVideos}</div>;
};

export default VideoList;
