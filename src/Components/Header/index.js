import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.scss'

export function Header({title, children}) {
  return (
    <>
      <h1 className={styles.title}>{title}</h1>
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