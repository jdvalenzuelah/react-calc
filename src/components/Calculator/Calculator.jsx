import React from 'react';
import CalcButton from 'components/CalcButton/CalcButton';
import {
  sum, sub, mul, mod,
} from 'utils/operations';

import './Calculator.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayValue: '',
      memory: null,
      operation: null,
      clean: false,
    };
  }

  numberHook = (number) => {
    let { displayValue } = this.state;
    const { clean } = this.state;
    if (displayValue.length === 9) return;
    if (clean) displayValue = '';
    this.setState({
      displayValue: displayValue === '' ? `${number}` : `${displayValue}${number}`,
      clean: false,
    });
  }

  operationHook = (op) => {
    if (op === 'AC') {
      this.setState({ displayValue: '', memory: null, operation: null });
      return;
    }
    const { displayValue, memory, operation } = this.state;
    if (displayValue !== '' && memory === null) {
      this.setState({ memory: displayValue, operation: op, clean: true });
    }
    if (operation === null && displayValue !== '' && memory !== null) {
      this.setState({
        operation: op,
      });
    }
    if (displayValue !== '' && memory !== null) {
      const result = this.performOperation(op);
      this.setState({
        displayValue: result < 0 || result > 999999999 ? 'ERROR' : result,
        memory: result < 0 || result > 999999999 ? null : result,
        operation: result < 0 || result > 999999999 || op === '=' ? null : op,
        clean: true,
      });
    }
  }

  performOperation() {
    const { memory, displayValue, operation } = this.state;
    switch (operation) {
      case '+':
        return sum(+memory, +displayValue);
      case '-':
        return sub(+memory, +displayValue);
      case '*':
        return mul(+memory, +displayValue);
      case '%':
        return mod(+memory, +displayValue);
      default:
        return 'Error';
    }
  }

  render() {
    const { displayValue } = this.state;
    return (
      <div className="calculator">
        <div className="display">
          <h4 data-testid="display">
            {displayValue}
          </h4>
        </div>
        <div className="calculator-pad">
          <CalcButton label="AC" hook={this.operationHook} type="operation-helper" />
          <CalcButton label="+/-" hook={this.operationHook} type="operation-helper" disabled />
          <CalcButton label="%" hook={this.operationHook} type="operation-helper" />
          <CalcButton label="/" hook={this.operationHook} type="operation" disabled />
          <CalcButton label="7" hook={this.numberHook} />
          <CalcButton label="8" hook={this.numberHook} />
          <CalcButton label="9" hook={this.numberHook} />
          <CalcButton label="*" hook={this.operationHook} type="operation" />
          <CalcButton label="4" hook={this.numberHook} />
          <CalcButton label="5" hook={this.numberHook} />
          <CalcButton label="6" hook={this.numberHook} />
          <CalcButton label="-" hook={this.operationHook} type="operation" />
          <CalcButton label="1" hook={this.numberHook} />
          <CalcButton label="2" hook={this.numberHook} />
          <CalcButton label="3" hook={this.numberHook} />
          <CalcButton label="+" hook={this.operationHook} type="operation" />
          <CalcButton label="" hook={this.numberHook} disabled />
          <CalcButton label="0" hook={this.numberHook} />
          <CalcButton label="" hook={this.numberHook} disabled />
          <CalcButton label="=" hook={this.operationHook} type="operation" />
        </div>
      </div>
    );
  }
}

export default Calculator;
