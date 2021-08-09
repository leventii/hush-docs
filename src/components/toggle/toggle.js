import React from 'react';

const Toggle = ({ checked, onChange }) => (
  <div className="toggle-control">
    <label htmlFor="dmcheck">
      <input
        className="dmcheck"
        type="checkbox"
        checked={checked}
        onChange={onChange}
        id="dmcheck"
      />
      <span>Dark Mode</span>
    </label>
  </div>
);

export default Toggle;
