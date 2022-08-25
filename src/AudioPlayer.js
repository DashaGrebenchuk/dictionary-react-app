import React from "react";

export default function AudioPlayer(props) {
  let audio = new Audio(props.audio);

  const start = () => {
    audio.play();
  };
  return (
    <button onClick={start}>
      <i className="fa-solid fa-circle-play" onClick={start}></i>
    </button>
  );
}
