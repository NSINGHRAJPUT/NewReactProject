import Video from "./Video";
import PlayButton from "./PlayButton";

const VideoList = ({ videos, deleteVideo, editVideo }) => {
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
          deleteVideo={deleteVideo}
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
