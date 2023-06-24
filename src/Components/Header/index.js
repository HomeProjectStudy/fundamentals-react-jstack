import React from 'react';
import PropTypes from 'prop-types';
import Title from '../Title'
export function Header({title, children}) {
  return (
    <>
      <Title>{title}</Title>
      {children}
    </>
  )
}

Header.PropTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

Header.defaultProps = {
  title:`G.J blogs`
}