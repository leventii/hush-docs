import React from 'react';

const Toggle = ({ checked, onChange }) => (
  <div className="toggle-control">
    <input
      className="dmcheck"
      type="checkbox"
      checked={checked}
      onChange={onChange}
      id="dmcheck"
    />
    <label htmlFor="dmcheck" />
  </div>
);

export default Toggle;
