import "./PlayButton.css";
import { useState } from "react";

const PlayButton = ({ children, onPlay, onPause }) => {
  const [btn, setBtn] = useState(false);
  const clickHandler = (e) => {
    e.stopPropagation();
    if (btn) onPause();
    else onPlay();
    setBtn(!btn);
  };
  return (
    <button onClick={clickHandler}>
      {children} : {btn ? ">" : "||"}
    </button>
  );
};

export default PlayButton;
