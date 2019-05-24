import React from "react";

const NiceDisplay = props => {
  return (
    <div className="niceDisplayBox">
      <p>Current:</p>
      <p>{props.total}</p>
    </div>
  );
};

export default NiceDisplay;
