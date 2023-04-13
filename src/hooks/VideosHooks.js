import { useContext } from "react";
import VideoContext from "../context/VideoContext";

const useVideoHooks = () => {
  return useContext(VideoContext);
};

export default useVideoHooks;
