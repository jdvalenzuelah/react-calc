import React from 'react';
import PropTypes from 'prop-types';
import './CalcButton.css';

const CalcButton = (props) => {
  const { label, type } = props;
  const classes = `button ${type}`;
  return (
    <div>
      <button className={classes} type="button">
        {label}
      </button>
    </div>
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
