import React from 'react';
import PropTypes from 'prop-types';
import './CalcButton.css';

const CalcButton = (props) => {
  const { label, type } = props;
  const classes = `button ${type}`;
  const handler = (e) => {
    props.hook(e.target.attributes.name.value);
  };
  return (
    <button className={classes} name={label} onClick={handler.bind(this)} type="button">
      {label}
    </button>
  );
};

CalcButton.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
};

CalcButton.defaultProps = {
  type: 'number',
};
export default CalcButton;
