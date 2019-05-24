import React from "react";
import Count from "./Count";
import NiceDisplay from "./NiceDisplay";
// import "./App.css";

class App extends React.Component {
  state = {
    display: 0,
    total: 0
  };

  addButton = () => {
    const current = this.state.total;
    this.setState({ total: current + 1 });
    console.log(this.state.total);
  };
  subButton = () => {
    const current = this.state.total;
    this.setState({ total: current - 1 });
    console.log(this.state.total);
  };
  multiplyButton = () => {
    const current = this.state.total;
    this.setState({ total: current * 2 });
    console.log(this.state.total);
  };
  divideButton = () => {
    const current = this.state.total;
    this.setState({ total: current / 2 });
    console.log(this.state.total);
  };

  render() {
    let calc = (
      <div className="displayBar">
        <Count total={this.state.total} />
      </div>
    );
    let niceCalc = (
      <div className="displayBar">
        <NiceDisplay total={this.state.total} />
      </div>
    );

    return (
      <div>
        <div id="container">
          {calc}
          <div id="buttons">
            <button onClick={this.addButton}> + </button>
            <button onClick={() => this.subButton()}> - </button>
            <button onClick={() => this.multiplyButton()}> * </button>
            <button onClick={() => this.divideButton()}> / </button>
          </div>
        </div>
        <div id="container2">
          <div id="poshCalc">
            {niceCalc}
            <div>
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
        </div>
      </div>
    );
  }
}

export default App;
