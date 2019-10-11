/* eslint-disable no-eval */
/* eslint-disable react/jsx-no-bind */
import React from 'react';
import CalcButton from 'components/CalcButton/CalcButton';
import './Calculator.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.pipe = false;
    this.state = {
      displayValue: '--',
      operationString: null,
    };
  }

  numberHook(value) {
    if (!Number.isNaN(value)) {
      let { displayValue } = this.state;
      if (displayValue.length === 9) return;
      if (this.pipe) {
        displayValue = value;
        this.pipe = false;
      } else {
        displayValue = displayValue === '--' ? '' : displayValue;
        displayValue += value;
      }
      this.setState({
        displayValue,
      });
    }
  }

  operationHook(value) {
    const { displayValue, operationString } = this.state;
    switch (value) {
      case '+':
        this.updateOperationString(displayValue, '+');
        break;
      case '-':
        this.updateOperationString(displayValue, '-');
        break;
      case '*':
        this.updateOperationString(displayValue, '*');
        break;
      case 'AC':
        this.setState({
          displayValue: '--',
          operationString: null,
        });
        return;
      default:
        break;
    }
    if (operationString !== null && displayValue !== '--') {
      this.pipe = true;
      this.performOperation(operationString, displayValue);
    }
  }

  updateOperationString(operand, operator) {
    this.setState({
      operationString: `${operand} ${operator}`,
      displayValue: '--',
    });
  }

  performOperation(s, f) {
    this.setState({
      displayValue: global.eval(`${s} ${f}`),
      operationString: null,
    });
  }

  debug() {
    console.log(this.state)
  }

  render() {
    const { displayValue } = this.state;
    const numpad = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((value) => <CalcButton key={value} label={value} hook={this.numberHook.bind(this)} />);
    return (
      <div className="calculator">
        <div className="display">
          <h4>
            {displayValue}
          </h4>
        </div>
        <div className="calculator-pad">
          <CalcButton label="AC" hook={this.operationHook.bind(this)} />
          <CalcButton label="+" hook={this.operationHook.bind(this)} />
          <CalcButton label="-" hook={this.operationHook.bind(this)} />
          <CalcButton label="*" hook={this.operationHook.bind(this)} />
          {numpad}
          <CalcButton label="=" hook={this.operationHook.bind(this)} />
        </div>
      </div>
    );
  }
}

export default Calculator;
