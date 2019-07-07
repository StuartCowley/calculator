import React from "react";

const Count = props => {
  return (
    <div className="displayBox">
      <p>Current total is:</p>
      <p>{props.total}</p>
    </div>
  );
};

export default Count;
