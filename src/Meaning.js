import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  console.log(props.meaning.definitions);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map((definition, index) => {
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
          <div key={index}>
            <p>
              <strong>Definition:</strong>
              {definition.definition}
            </p>
          </div>;
        }
      })}
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
