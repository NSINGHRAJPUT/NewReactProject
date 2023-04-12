import { useState } from "react";
import "./AddVideo.css";

const initialState = {
  url: "https://placeimg.com/240/120/any",
  time: "1 month",
  channel: "NSRGFX",
};
const AddVideo = ({ addVideos }) => {
  const [video, setVideo] = useState(initialState);
  let titl, view;
  const titleHandler = (e) => {
    titl = e.target.value;
  };
  const viewsHandler = (e) => {
    view = e.target.value;
  };
  const VideoSubmitHandler = (e) => {
    e.preventDefault();
    setVideo({ ...video, title: titl, views: view });
    addVideos(video);
  };
  return (
    <form>
      <label htmlFor="title">Title</label>
      <input type="text" onChange={titleHandler}></input>
      <label htmlFor="Views">Views</label>
      <input type="text" onChange={viewsHandler}></input>
      <span> </span>
      <button onClick={VideoSubmitHandler}>Add Video</button>
    </form>
  );
};

export default AddVideo;
