import { useState } from "react";
import "./App.css";
import AddVideo from "./components/AddVideo";
import VideoData from "./Data/Data";
import VideoList from "./components/VideoList";

function App() {
  const [videos, setVideos] = useState(VideoData);
  const addVideos = (video) => {
    setVideos([...videos, { ...video, id: videos.length + 1 }]);
    console.log(video);
  };
  return (
    <div className="app">
      <h2>NSRTUBE</h2>
      <AddVideo addVideos={addVideos}>Add Video</AddVideo>
      <VideoList videos={videos}></VideoList>
    </div>
  );
}

export default App;
