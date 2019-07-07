import React from "react";

const CalcScreen = props => {
    return (
      <div className="calcScreen">
        <p>Current: </p>
        <p>{props.temp}</p> 
      </div>
    );
};

export default CalcScreen;