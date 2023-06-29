import React, {useContext} from 'react';
import { ThemeContextLayout } from '../../context/ThemeContextLayout'
import { Container } from './styles';

export default function Footer({onToogleTheme, selectedTheme}) {
  const { theme, handleToogleTheme} = useContext(ThemeContextLayout)
  return (
    <Container>
      <span>JStack's Blog. Todos os direitos reservados.</span>
      <button 
        type="button" 
        onClick={handleToogleTheme}> 
        {theme === 'dark' ? '🌞' : '🌑'}
      </button>
    </Container>
  );
}