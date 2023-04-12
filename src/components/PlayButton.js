import "./PlayButton.css";

const PlayButton = ({ children, onPlay, onPause }) => {
  let btn = false;
  const clickHandler = (e) => {
    e.stopPropagation();
    if (btn) onPause();
    else onPlay();
    btn = !btn;
  };
  return <button onClick={clickHandler}>{children}</button>;
};

export default PlayButton;
