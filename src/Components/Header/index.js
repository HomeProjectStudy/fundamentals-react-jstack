import React from 'react';
import { Container } from './styles';
import { ThemeContextLayout } from '../../context/ThemeContextLayout'

export default class Header extends React.Component {
  render() {
    return (
      <ThemeContextLayout.Consumer>
        {({theme, handleToogleTheme}) => (
          <Container>
          <h1>JStack's Blog</h1>
          <button
            type="button"
            onClick={handleToogleTheme}
          >
            {theme === 'dark' ? '🌞' : '🌑'}
          </button>
        </Container>
        )}
      </ThemeContextLayout.Consumer>
    );
  }
}

// Podemos fazer as tipagens como em components funcionais também.

// Header.propTypes = {
//   selectedTheme: PropTypes.string.isRequired,
//   onToogleTheme: PropTypes.func.isRequired
// }