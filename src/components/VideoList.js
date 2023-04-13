import Video from "./Video";
import PlayButton from "./PlayButton";
import { useContext } from "react";
import VideoContext from "../context/VideoContext";

const VideoList = ({ editVideo }) => {
  const videos = useContext(VideoContext);
  return (
    <>
      {videos.map((item, index) => (
        <Video
          key={index}
          id={item.id}
          url={item.url}
          title={item.title}
          channel={item.channel}
          views={item.views}
          time={item.time}
          editVideo={editVideo}
        >
          <PlayButton
            onPlay={() => console.log("Playing")}
            onPause={() => console.log("Paused")}
          >
            Play
          </PlayButton>
        </Video>
      ))}
    </>
  );
};

export default VideoList;
