import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword} definition`);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form className="Dictionary-search-form" onSubmit={search}>
        <input
          type="search"
          placeholder="type a word"
          onChange={handleKeywordChange}
        />
      </form>
    </div>
  );
}