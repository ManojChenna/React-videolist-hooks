import axios from "axios";
const KEY = "AIzaSyC4mZDXQPHWH6i--6_qnTX2b4gBFBxsxH8";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    type: "video",
    key: KEY
  }
});
