import React from "react";

const TextLine = props => {
  return (
    <div className="textline">
      <span>{props.grey}</span>
      <span>{props.link}</span>
    </div>
  );
};

export default TextLine;
