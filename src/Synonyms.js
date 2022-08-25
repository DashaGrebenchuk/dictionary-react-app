import React from "react";

export default function Synonyms(props) {
  if (props.synonyms.length !== 0) {
    return (
      <div className="Synonyms">
        <span>Synonyms:</span>
        <ul className="list-synonyms">
          {props.synonyms.map((synonym, index) => {
            return <li key={index}>{synonym}</li>;
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
