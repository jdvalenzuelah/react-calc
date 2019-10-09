import React from 'react';
import CalcButton from 'components/CalcButton/CalcButton';
import './Calculator.css';

const Calculator = () => {
  const p = 9;
  return (
    <div className="calculator">
      <CalcButton label="AC" />
      <CalcButton label="+/-" />
      <CalcButton label="%" />
      <CalcButton label="\" />
      <CalcButton label="7" />
      <CalcButton label="8" />
      <CalcButton label="9" />
      <CalcButton label="X" type="operation" />
      {p}
    </div>
  );
};

export default Calculator;
