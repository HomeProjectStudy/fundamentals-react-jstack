import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '../context/ThemeContext';

export function Button(props) {
  const theme = useContext(ThemeContext);
  return (
    <button
      onClick={props.onClick}
      style={{ 
        color: theme === 'dark' ? '#FFF' : '#000',
        background: theme === 'dark' ? '#000' : '#FFFF'
      }}
    >
      {props.children}
    </button>

  )
}

Button.PropTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
}