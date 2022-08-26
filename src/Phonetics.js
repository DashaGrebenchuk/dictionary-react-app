import React from "react";
import AudioPlayer from "./AudioPlayer";
import "./Phonetics.css";

export default function Phonetics(props) {
  return (
    <div className="Phonetic">
      {props.phonetics.map((phonetic, index) => {
        if (phonetic.audio && phonetic.text) {
          return (
            <div key={index}>
              <AudioPlayer audio={phonetic.audio} />
              <h3>{phonetic.text}</h3>
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}
