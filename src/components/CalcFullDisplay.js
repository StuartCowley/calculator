import React from "react";
import CalcScreen from "./CalcScreen";

class CalcFullDisplay extends React.Component {
  state = {
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
