import React from "react";
import CalcScreen from "./CalcScreen";

class CalcFullDisplay extends React.Component {
  state = {
<<<<<<< HEAD
    total: ''};

  getInput = key => {
    const current = this.state.total;
    if (key === '=') {
      try {
        const update = eval(current);
        this.setState({
          total: update
        })
      } catch (error) {
        this.setState({
          total: 'error'
        })
      }

    } else if (key === 'C') {
      const current = (this.state.total).toString(10);
      const update = current.slice(0, current.length-1);
      (current === 'error') ? this.setState({total: ''}) : this.setState({total: update})
    } else if (key === 'CE') {
      this.setState({ total: '' });
    } else {
    const update = current + key;
    this.setState({ total: update })
    }
  }
  
  render() {
    return (
      <div id="calcContainer">
        <CalcScreen result={this.state.total} />
        <div>       
          <InputButton operator='(' calc={this.getInput} />
          <InputButton operator=')' calc={this.getInput} />
          <InputButton operator='C' calc={this.getInput} />
          <InputButton operator='CE' calc={this.getInput} />          
          <InputButton operator='7' calc={this.getInput} />
          <InputButton operator='8' calc={this.getInput} />
          <InputButton operator='9' calc={this.getInput} />
          <InputButton operator='/' calc={this.getInput} />
          <InputButton operator='4' calc={this.getInput} />  
          <InputButton operator='5' calc={this.getInput} />  
          <InputButton operator='6' calc={this.getInput} />  
          <InputButton operator='*' calc={this.getInput} />
          <InputButton operator='1' calc={this.getInput} />
          <InputButton operator='2' calc={this.getInput} />
          <InputButton operator='3' calc={this.getInput} />
          <InputButton operator='+' calc={this.getInput} />
          <InputButton operator='0' calc={this.getInput} />
          <InputButton operator='.' calc={this.getInput} />
          <InputButton operator='=' calc={this.getInput} />
          <InputButton operator='-' calc={this.getInput} />
        </div>
=======
    display: 0,   
    total: 0,     
    temp: 0,
    firstInput: 0,
    runningTotal: 0  
  };

  getInput = key => {
    if (this.state.runningTotal === this.state.display) {
      this.setState({
        display: 0
      })
    }
      let currentDisplay = Number(this.state.display);
      let text = Number(currentDisplay + key)
      this.setState({
        temp: text,
        display: text
      })
    };

  addButton = () => {
    let temp = this.state.temp;
    let firstInput = Number(this.state.firstInput);
    let runningTotal = Number(this.state.runningTotal);
    let display = Number(this.state.display);

    if (firstInput===0) {
      this.setState({
        firstInput: temp,
        runningTotal: runningTotal + temp,
        temp: 0,
        display: 0
      })
    } else if (firstInput!==0) {
      let newTotal = Number(firstInput + display);
      this.setState({
        temp: 0,
        runningTotal: newTotal,
        display: newTotal
      })
    } 
    
    // console.log('temp: ' + this.state.temp)
    // console.log('first: ' + this.state.firstInput)
    // console.log('running: ' + this.state.runningTotal)
    }

  subButton = () => {
    let current = this.state.total;
    this.setState({
      total: current - 1
    });
  };
  multiplyButton = () => {
    let current = this.state.total;
    this.setState({
      total: current * 2
    });
  };
  divideButton = () => {
    let current = this.state.total;
    this.setState({
      total: current / 2
    });
  };
  equalsButton = () => {
    // let currentNum = Number(this.state.temp);
    // let val = Number(this.state.total);
    // let newTotal = Number(currentNum + val);


    let runningTotal = this.state.total;
    let current = Number(this.state.runningTotal);
    this.setState({
      total: runningTotal + current
    });
  };

  clearButton = () => {
    this.setState({
      display: 0
    })
  };

  clearAllButton = () => {
    this.setState({
      display: 0,
      total: 0,
      firstInput: 0,
      runningTotal: 0,
      temp: 0
    });
  }


  render() {
    return (
      <div id="calcContainer">
        <CalcScreen temp={Number(this.state.display)} />
        <div>
          <button onClick={() => this.clearButton()} className="clearButton">
            Clear
          </button>
          <button onClick={() => this.clearAllButton()} className="clearButton">
            All Clear
          </button>
        </div>
        <div>
          <button onClick={() => this.getInput("7")} className="smallButton">
            7
          </button>
          <button onClick={() => this.getInput("8")} className="smallButton">
            8
          </button>
          <button onClick={() => this.getInput("9")} className="smallButton">
            9
          </button>
          <button onClick={this.divideButton} className="smallButton">
            %
          </button>
        </div>
        <div>
          <button onClick={() => this.getInput("4")} className="smallButton">
            4
          </button>
          <button onClick={() => this.getInput("5")} className="smallButton">
            5
          </button>
          <button onClick={() => this.getInput("6")} className="smallButton">
            6
          </button>
          <button onClick={this.multiplyButton} className="smallButton">
            x
          </button>
        </div>
        <div>
          <button onClick={() => this.getInput("1")} className="smallButton">
            1
          </button>
          <button onClick={() => this.getInput("2")} className="smallButton">
            
            2
          </button>
          <button onClick={() => this.getInput("3")} className="smallButton">
            
            3
          </button>
          <button onClick={this.addButton} className="smallButton">
            +
          </button>
        </div>
        <div>
          <button onClick={() => this.getInput("0")} className="doubleButton">
            
            0
          </button>
          <button onClick={() => this.equalsButton()} className="smallButton">
            =
          </button>
          <button onClick={this.subButton} className="smallButton">
            -
          </button>
        </div>
>>>>>>> c0a99e166c148f8f300392cab29da070376559e3
      </div>
    );
  }
}
<<<<<<< HEAD

const InputButton = props => {
  return(
    <button name={'props.operator'} onClick={() => props.calc(props.operator)} className="smallButton"> {props.operator} </button>
  )
}
=======
>>>>>>> c0a99e166c148f8f300392cab29da070376559e3

export default CalcFullDisplay;
