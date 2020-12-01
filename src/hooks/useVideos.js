import {useState, useEffect} from "react";
import Youtube from "../apis/Youtube"

const useVideos = (defaultSearchterm) => {
  const [videos, setVideos] = useState([]);
  
  useEffect(() => {
    search(defaultSearchterm);
  }, [defaultSearchterm]);

  const search = async (searchText) => {
    const resp = await Youtube.get("/search", {
      params: {
        q: searchText
      }
    });
    setVideos(resp.data.items);
  };

  return [videos, search];
};

export default useVideos;