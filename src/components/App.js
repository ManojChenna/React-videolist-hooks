import React from "react";
import SearchBar from "./SearchBar";
import Youtube from "../apis/Youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onEnterSubmit("React js");
  }

  onEnterSubmit = async (searchText) => {
    const resp = await Youtube.get("/search", {
      params: {
        q: searchText
      }
    });
    this.setState({
      videos: resp.data.items,
      selectedVideo: resp.data.items[0]
    });
  };

  selectedVideo = (video) => {
    this.setState({ selectedVideo: video });
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onEnterSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                onSelectVideo={this.selectedVideo}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
