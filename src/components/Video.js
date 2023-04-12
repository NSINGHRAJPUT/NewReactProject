import "./Video.css";

const Video = ({ url, title, channel, views, time, children }) => {
  return (
    <div className="item">
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
