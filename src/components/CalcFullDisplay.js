import React from "react";
import CalcScreen from "./CalcScreen";

class CalcFullDisplay extends React.Component {
  state = {
    display: 0,
    total: 0,
    temp: 0,
    numString: 0
  };

// ISSUES:
// Updating the state from other props. Can this be done? Trying to find a way to update
// the screen total based on the running subtotal ass it changes

  getInput = (key) => {
    const currentNum = this.state.numString;
    this.setState({ numString: currentNum + key })
    this.setState({ display: this.state.numString })
  }
  addButton = () => {
    const currentNum = Number(this.state.numString);
    console.log(currentNum)
    if (this.state.temp === 0) {
      this.setState({ total: currentNum })
      this.setState({ numString: 0 })
    } else {
      this.setState({ temp: currentNum });
      this.setState({ numString: 0 })
    }
    console.log(this.state.total)
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
  equalsButton = () => {
    const runningTotal = this.state.total;
    const current = Number(this.state.numString);
    this.setState({ total: runningTotal + current })

  };
  clearAllButton = () => {
    this.setState({ display: 0 });
    this.setState({ total: 0 });
    this.setState({ temp: 0 });
    this.setState({ numString: '0' });
  }

  render() {
    return (
      <div id="calcContainer">
        <CalcScreen temp={Number(this.state.total)} />
        <div>
          <button onClick={() => this.clearAllButton()} className="clearButton">Clear</button>
          <button onClick={() => this.clearAllButton()} className="clearButton">All Clear</button>
        </div>
        <div>
          <button onClick={() => this.getInput('7')} className="smallButton">7</button>
          <button onClick={() => this.getInput('8')} className="smallButton">8</button>
          <button onClick={() => this.getInput('9')} className="smallButton">9</button>
          <button onClick={this.divideButton} className="smallButton">%</button>
        </div>
        <div>
          <button onClick={() => this.getInput('4')} className="smallButton">4</button>
          <button onClick={() => this.getInput('5')} className="smallButton">5</button>
          <button onClick={() => this.getInput('6')} className="smallButton">6</button>
          <button onClick={this.multiplyButton} className="smallButton">x</button>
        </div>
        <div>
          <button onClick={() => this.getInput('1')} className="smallButton">1</button>
          <button onClick={() => this.getInput('2')} className="smallButton">2</button>
          <button onClick={() => this.getInput('3')} className="smallButton">3</button>
          <button onClick={this.addButton} className="smallButton">+</button>
        </div>
        <div>
          <button onClick={() => this.getInput('0')} className="doubleButton">0</button>
          <button onClick={() => this.equalsButton()} className="smallButton">=</button>
          <button onClick={this.subButton} className="smallButton">-</button>
        </div>
      </div>  
    );
  }
};

export default CalcFullDisplay;
