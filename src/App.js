import "./App.css";
import Video from "./components/Video";
import Data from "./Data/Data";

function App() {
  return (
    <div className="app">
      <h2>NSRTUBE</h2>
      <div className="container">
        {Data.map((item) => (
          <Video
            url={item.url}
            title={item.title}
            channel={item.channel}
            views={item.views}
            time={item.time}
          ></Video>
        ))}
      </div>
    </div>
  );
}

export default App;
