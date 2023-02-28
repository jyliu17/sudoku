import React from 'react';

const Cell = ({ value, onChange }) => {
  return (
    <input
      className="cell"
      type="number"
      min="1"
      max="9"   
      value={value === 0 ? '' : value}
      onChange={onChange}
    />
  );
};

export default Cell;