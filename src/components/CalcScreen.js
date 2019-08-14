import React from "react";

const CalcScreen = props => {
    return (
      <div className = "calcScreen" >
        <p> { props.result } </p>
      </div>
    );
};

export default CalcScreen;