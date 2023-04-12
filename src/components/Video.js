import "./Video.css";

const Video = ({ url, title, channel, views, time }) => {
  return (
    <div class="item">
      <img src={url} alt="" />
      <span class="caption">
        <div className="title">{title}</div>
        <div className="channel">{channel}</div>
        <div className="views">
          {views} views <span>.</span> {time}
          {" ago"}
        </div>
      </span>
    </div>
  );
};

export default Video;
