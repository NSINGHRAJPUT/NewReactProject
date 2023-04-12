import Video from "./Video";
import PlayButton from "./PlayButton";

const VideoList = ({ videos }) => {
  return (
    <>
      {videos.map((item, index) => (
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
    </>
  );
};

export default VideoList;
