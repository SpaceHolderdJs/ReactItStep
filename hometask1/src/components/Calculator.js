import React from "react";
import Operation from "./Operation";

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calculated: false,
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick() {
    this.setState({
      calculated: true,
    });
  }

  handleChange(e) {
    this.setState({
      calculated: this.state.calculated,
      [e.target.name]: e.target.value,
    });
  }

  render() {
    const { calculated, a1, a2, opr } = this.state;
    console.table(this.state);
    return (
      <div className="res">
        <div className="form">
          <input
            type="number"
            placeholder="First number"
            name="a1"
            onChange={this.handleChange}
          />
          <input
            placeholder="Operation"
            name="opr"
            onChange={this.handleChange}
          />
          <input
            type="number"
            placeholder="Second number"
            name="a2"
            onChange={this.handleChange}
          />
          <button onClick={this.handleClick}>Submit</button>
        </div>
        {calculated && <Operation a1={+a1} a2={+a2} opr={opr} />}
      </div>
    );
  }
}
