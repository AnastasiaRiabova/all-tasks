import React from 'react';
import './counter.css';
import Controls from './controls';

class Counter extends React.Component {
  static propTypes = {};
  static defaultProps = {
    intialValue: 0,
  };
  state = {
    value: this.props.intialValue,
    second: 3,
  };
  toIncrement = () => {
    this.setState(prev => ({ value: prev.value + 1 }));
  };

  toDecrement = () => {
    if (this.state.value > 0) {
      this.setState(prev => ({ value: prev.value - 1 }));
    }
  };
  render() {
    return (
      <div className="Counter">
        <span className="Counter__value">{this.state.value}</span>
        <Controls increment={this.toIncrement} decrement={this.toDecrement} />
      </div>
    );
  }
}

export default Counter;
