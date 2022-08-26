import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.slice(0, 3).map(function (definition, index) {
        if (definition.example) {
          return (
            <div key={index}>
              <p>{definition.definition}</p>
              <p className="example">
                <span className="example-text">e. g. </span>
                {definition.example}
              </p>
            </div>
          );
        } else {
          return (
            <div key={index}>
              <p>{definition.definition}</p>
            </div>
          );
        }
      })}
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
