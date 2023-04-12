import "./Video.css";

const Video = ({
  id,
  url,
  title,
  channel,
  views,
  time,
  children,
  deleteVideo,
  editVideo,
}) => {
  return (
    <div className="item">
      <div>
        <button className="close" onClick={() => deleteVideo(id)}>
          X
        </button>
        <button className="edit" onClick={() => editVideo(id)}>
          !
        </button>
      </div>
      <img src={url} alt="" />
      <div className="caption">
        <div className="title">{title}</div>
        <div className="channel">{channel}</div>
        <div className="views">
          {views} views <span>.</span> {time}
          {" ago"}
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Video;
