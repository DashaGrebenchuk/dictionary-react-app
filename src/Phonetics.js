import React from "react";
import AudioPlayer from "./AudioPlayer";

export default function Phonetics(props) {
  return (
    <div className="Phonetic">
      {props.phonetics.map((phonetic, index) => {
        if (phonetic.audio && phonetic.text) {
          return (
            <div className="phonetics" key={index}>
              <div>
                <AudioPlayer audio={phonetic.audio} />
              </div>
              <div>{phonetic.text}</div>
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}
