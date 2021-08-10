import React from 'react';
import useDarkMode from 'use-dark-mode';

import Switch from 'react-switch';
import './toggle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const Toggle = () => {
  const darkMode = useDarkMode(false);
  
  return (
      <label>
        <Switch 
          className="toggle-switch"
          onChange={darkMode.toggle} 
          checked={darkMode.value} 
          offColor="#ccc"
          onColor="#444"
          uncheckedIcon={false}
          checkedIcon={false}
          uncheckedHandleIcon={
            <div style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              fontSize: 32,
              background: "none",
              color: "#ff8c00"
            }}>
              <FontAwesomeIcon icon={faSun} />
            </div>
          }
          checkedHandleIcon={
            <div style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              fontSize: 32,
              background: "none",
              color: "#87ceeb"
            }}>
              <FontAwesomeIcon icon={faMoon} />
            </div>
          }
          aria-label={darkMode.value ? "dark mode" : "light mode"}
        />
      </label>
    );
};

export default Toggle;