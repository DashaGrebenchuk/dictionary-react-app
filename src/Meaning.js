import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  console.log(props.meaning.definitions);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.slice(0, 3).map(function (definition, index) {
        if (definition.example) {
          return (
            <div key={index}>
              <p>
                <strong>Definition:</strong>
                {definition.definition}
              </p>
              <p>
                <em>
                  <span>e. g.</span>
                  {definition.example}
                </em>
              </p>
            </div>
          );
        } else {
          return (
            <div key={index}>
              <p>
                <strong>Definition:</strong>
                {definition.definition}
              </p>
            </div>
          );
        }
      })}
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
