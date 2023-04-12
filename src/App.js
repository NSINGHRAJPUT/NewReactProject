//import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import PlayButton from "./components/PlayButton";
import Video from "./components/Video";
import VideoData from "./Data/Data";

function App() {
  return (
    <div className="app">
      <h2>NSRTUBE</h2>
      <button>Add Video</button>
      <div className="container">
        {VideoData.map((item, index) => (
          <Video
            key={index}
            url={item.url}
            title={item.title}
            channel={item.channel}
            views={item.views}
            time={item.time}
          >
            <PlayButton
              onPlay={() => console.log("Playing")}
              onPause={() => console.log("Paused")}
            >
              Play
            </PlayButton>
          </Video>
        ))}
        <div style={{ clear: "both" }}></div>
        <Counter></Counter>
      </div>
    </div>
  );
}

export default App;
