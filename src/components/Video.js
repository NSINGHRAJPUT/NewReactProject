import "./Video.css";

const Video = ({ url, title, channel, views, time, children }) => {
  return (
    <div className="item">
      <img src={url} alt="" />
      <span className="caption">
        <h3 className="title">{title}</h3>
        <div className="channel">{channel}</div>
        <div className="views">
          {views} views <span>.</span> {time}
          {" ago"}
        </div>
        <div>{children}</div>
      </span>
    </div>
  );
};

export default Video;
