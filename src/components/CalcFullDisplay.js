import React from "react";
import CalcScreen from "./CalcScreen";

class CalcFullDisplay extends React.Component {
  state = {
    display: 0,
    total: 0,
    temp: 0
  };

  addButton = () => {
    const current = this.state.total;
    this.setState({ total: current + 1 });
  };
  subButton = () => {
    const current = this.state.total;
    this.setState({ total: current - 1 });
  };
  multiplyButton = () => {
    const current = this.state.total;
    this.setState({ total: current * 2 });
  };
  divideButton = () => {
    const current = this.state.total;
    this.setState({ total: current / 2 });
  };

  render() {
    return (
      <div id="calcContainer">
        <CalcScreen temp={this.state.total} />
        <div>
          <button className="resetButton">Clear</button>
        </div>
        <div>
          <button className="smallButton">7</button>
          <button className="smallButton">8</button>
          <button className="smallButton">9</button>
          <button onClick={this.divideButton} className="smallButton">%</button>
        </div>
        <div>
          <button className="smallButton">4</button>
          <button className="smallButton">5</button>
          <button className="smallButton">6</button>
          <button onClick={this.multiplyButton} className="smallButton">x</button>
        </div>
        <div>
          <button className="smallButton">1</button>
          <button className="smallButton">2</button>
          <button className="smallButton">3</button>
          <button onClick={this.addButton} className="smallButton">+</button>
        </div>
        <div>
          <button className="doubleButton">0</button>
          <button className="smallButton">=</button>
          <button onClick={this.subButton} className="smallButton">-</button>
        </div>
      </div>  
    );
  }
};

export default CalcFullDisplay;
