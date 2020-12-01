import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import Youtube from "../apis/Youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    onEnterSubmit("React js");
  }, []);

  const onEnterSubmit = async (searchText) => {
    const resp = await Youtube.get("/search", {
      params: {
        q: searchText
      }
    });
    setVideos(resp.data.items);
    setSelectedVideo(resp.data.items[0]);
  };

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={onEnterSubmit} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList
              videos={videos}
              onSelectVideo={setSelectedVideo}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
