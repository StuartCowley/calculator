import React from "react";
import Screen from "./Screen";

const CalcFullDisplay = props => {
  return (
    <div id="poshCalc">
      <Screen temp={props.temp} />
      <div>
        <button className="resetButton">Clear</button>
        <button className="smallButton">7</button>
        <button className="smallButton">8</button>
        <button className="smallButton">9</button>
        <button className="smallButton">%</button>
      </div>
      <div>
        <button className="smallButton">4</button>
        <button className="smallButton">5</button>
        <button className="smallButton">6</button>
        <button className="smallButton">x</button>
      </div>
      <div>
        <button className="smallButton">1</button>
        <button className="smallButton">2</button>
        <button className="smallButton">3</button>
        <button className="smallButton">+</button>
      </div>
      <div>
        <button className="doubleButton">0</button>
        <button className="smallButton">=</button>
        <button className="smallButton">-</button>
      </div>
    </div>
  );
};

export default CalcFullDisplay;
