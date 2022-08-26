import React from "react";
import "./AudioPlayer.css";

export default function AudioPlayer(props) {
  let audio = new Audio(props.audio);

  const start = () => {
    audio.play();
  };
  return (
    <button className="Audio" onClick={start}>
      <i className="fa-solid fa-circle-play"></i>
    </button>
  );
}
