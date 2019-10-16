import React from 'react';
import PropTypes from 'prop-types';
import './CalcButton.css';

const CalcButton = (props) => {
  const { label, type, disabled } = props;
  const classes = `button ${type}`;
  const handler = (e) => {
    props.hook(e.target.attributes.name.value);
  };
  return (
    <button className={classes} name={label} onClick={handler} disabled={disabled} type="button">
      {label}
    </button>
  );
};

CalcButton.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  hook: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

CalcButton.defaultProps = {
  type: 'number',
  disabled: false,
};
export default CalcButton;
