import React from "react";
import Count from "./Count";
import Operators from "./Operators";

class BasicCalc extends React.Component {
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

    render() {
      return(
        <div>
          <div id ="container">
            <Count total={this.state.total} />
          </div>
          <div id="buttons">
              <button onClick={this.addButton}> + </button>
              <button onClick={this.subButton}> - </button> 
              <button onClick={this.multiplyButton}> * </button> 
              <button onClick={this.divideButton}> / </button>
          </div>
        </div>  
        
        );
    }
}

export default BasicCalc;