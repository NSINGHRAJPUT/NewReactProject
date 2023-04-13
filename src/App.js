import { useReducer, useState } from "react";
import "./App.css";
import AddVideo from "./components/AddVideo";
import VideoData from "./Data/Data";
import VideoList from "./components/VideoList";
//import ThemeContext from "./context/ThemeContext";
import VideoContext from "./context/VideoContext";
import VideoDispatchContext from "./context/VideoDispatchContext";

function App() {
  const [editableVideo, setEditableVideo] = useState(null);
  const videoReducer = (videos, action) => {
    switch (action.type) {
      case "ADD":
        return [...videos, { ...action.payload, id: videos.length + 1 }];
      case "DELETE":
        return videos.filter((vid) => vid.id !== action.payload);
      case "UPDATE":
        const index = videos.findIndex((v) => v.id === action.payload.id);
        const newVideos = [...videos];
        newVideos.splice(index, 1, action.payload);
        setEditableVideo(null);
        return newVideos;
      default:
        return videos;
    }
  };
  const [videos, dispatch] = useReducer(videoReducer, VideoData);
  // const [videos, setVideos] = useState(VideoData);

  //const themeContext = useContext(ThemeContext);

  // const addVideos = (video) => {
  //   dispatch({ type: "ADD", payload: video });
  // };
  // const deleteVideo = (id) => {
  //   dispatch({ type: "DELETE", payload: id });
  //setVideos(videos.filter((vid) => vid.id !== id));
  //};
  const editVideo = (id) => {
    setEditableVideo(videos.find((vid) => vid.id === id));
  };
  //const updateVideo = (video) => {
  //dispatch({ type: "UPDATE", payload: video });
  // const index = videos.findIndex((v) => v.id === video.id);
  // const newVideos = [...videos];
  // newVideos.splice(index, 1, video);
  //setVideos(newVideos);
  //};
  return (
    <VideoContext.Provider value={videos}>
      <VideoDispatchContext.Provider value={dispatch}>
        <div className="app">
          <h2>NSRTUBE</h2>
          <AddVideo editableVideo={editableVideo}>Add Video</AddVideo>
          <VideoList editVideo={editVideo}></VideoList>
        </div>
      </VideoDispatchContext.Provider>
    </VideoContext.Provider>
  );
}

export default App;
