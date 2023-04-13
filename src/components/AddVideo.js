import { useEffect, useState } from "react";
import "./AddVideo.css";

const initialState = {
  url: "https://placeimg.com/240/120/any",
  time: "1 month",
  channel: "NSRGFX",
  title: "",
  views: "",
};
const AddVideo = ({ dispatch, updateVideo, editableVideo }) => {
  const [video, setVideo] = useState(initialState);

  const VideoSubmitHandler = (e) => {
    e.preventDefault();
    if (editableVideo) {
      dispatch({ type: "UPDATE", payload: video });
    } else {
      dispatch({ type: "ADD", payload: video });
    }

    setVideo(initialState);
  };
  const changeHandler = (e) => {
    setVideo({ ...video, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    if (editableVideo) setVideo(editableVideo);
  }, [editableVideo]);
  return (
    <form>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        name="title"
        onChange={changeHandler}
        placeholder="title"
        value={video.title}
      ></input>
      <label htmlFor="Views">Views</label>
      <input
        type="text"
        name="views"
        onChange={changeHandler}
        placeholder="views"
        value={video.views}
      ></input>
      <span> </span>
      <button onClick={VideoSubmitHandler}>
        {editableVideo ? "edit" : "Add"} Video
      </button>
    </form>
  );
};

export default AddVideo;
