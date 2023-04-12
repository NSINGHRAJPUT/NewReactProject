import "./App.css";
import PlayButton from "./components/PlayButton";
import Video from "./components/Video";
import Data from "./Data/Data";

function App() {
  return (
    <div className="app">
      <h2>NSRTUBE</h2>
      <div className="container">
        {Data.map((item, index) => (
          <Video
            key={index}
            url={item.url}
            title={item.title}
            channel={item.channel}
            views={item.views}
            time={item.time}
          >
            <PlayButton
              onPlay={() => console.log("Play")}
              onPause={() => console.log("Pause")}
            >
              Play
            </PlayButton>
          </Video>
        ))}
        <div style={{ clear: "both" }}></div>
      </div>
    </div>
  );
}

export default App;
