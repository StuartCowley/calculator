import React from "react";
import Count from "./Count";
import Screen from "./Screen";
import Operators from "./Operators";
import CalcFullDisplay from "./CalcFullDisplay";

class App extends React.Component {
  state = {
    display: 0,
    total: 0,
    temp: 0
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

  // MOVED TO OPERATORS FILE
  // poshClearButton = () => {};
  // poshAddButton = () => {};
  // poshSubButton = () => {};
  // poshMultiplyButton = () => {};
  // poshDivideButton = () => {};

  render() {
    let calc = (
      <div className="displayBar">
        <Count total={this.state.total} />
      </div>
    );
    let niceCalc = (
      <div className="displayBar">
        <Screen total={this.state.total} />
      </div>
    );

    return (
      <div>
        <div id="container">
          {calc}
          <div id="buttons">
            <button onClick={this.addButton}> + </button>
            <button onClick={this.subButton}> - </button>
            <button onClick={this.multiplyButton}> * </button>
            <button onClick={this.divideButton}> / </button>
          </div>
        </div>
        <div id="container2">
          <CalcFullDisplay temp={this.state.temp} />
        </div>
      </div>
    );
  }
}

export default App;
