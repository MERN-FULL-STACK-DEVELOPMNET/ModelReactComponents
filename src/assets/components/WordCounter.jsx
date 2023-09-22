import React from "react";
import { useState, useEffect } from "react";
import "./WordCounter.css";

function WordCounter() {
  const [text, setText] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const changeHandler = (event) => {
    setText(event.target.value);
  };

  useEffect(() => {
    const words = text.split(" ");
    let wordCount = 0;
    words.forEach((word) => {
      if (word.trim() !== "") {
        wordCount++;
      }
    });
    setWordCount(wordCount);
  }, [text]);

  return (
    <div className="container flexRow">
      <div className="flexColumn">
        <h2 className="word-count">Word Counter</h2>
        <textarea
          value={text}
          onChange={changeHandler}
          placeholder="Click the paste button"
          className="box"
        />
        <button
          className="pasteButton"
          onClick={(e) => {
            let paste = (e.clipboardData || window.clipboardData).getData(
              "Text"
            );
            setValue(paste);
          }}
        >
          paste
        </button>
        <p className="word-count">Word Count: {wordCount}</p>
      </div>
    </div>
  );
}

export default WordCounter;
