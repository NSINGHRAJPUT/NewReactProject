import { useState } from "react";
import "./App.css";
import AddVideo from "./components/AddVideo";
import VideoData from "./Data/Data";
import VideoList from "./components/VideoList";

function App() {
  const [videos, setVideos] = useState(VideoData);
  const [editableVideo, setEditableVideo] = useState(null);
  const addVideos = (video) => {
    setVideos([...videos, { ...video, id: videos.length + 1 }]);
    console.log(video);
  };
  const deleteVideo = (id) => {
    setVideos(videos.filter((vid) => vid.id !== id));
  };
  const editVideo = (id) => {
    setEditableVideo(videos.find((vid) => vid.id === id));
  };
  const updateVideo = (video) => {
    const index = videos.findIndex((v) => v.id === video.id);
    const newVideos = [...videos];
    newVideos.splice(index, 1, video);
    setVideos(newVideos);
  };
  return (
    <div className="app">
      <h2>NSRTUBE</h2>
      <AddVideo
        addVideos={addVideos}
        updateVideo={updateVideo}
        editableVideo={editableVideo}
      >
        Add Video
      </AddVideo>
      <VideoList
        videos={videos}
        deleteVideo={deleteVideo}
        editVideo={editVideo}
      ></VideoList>
    </div>
  );
}

export default App;
