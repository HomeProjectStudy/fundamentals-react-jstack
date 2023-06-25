import React, { useState, useMemo } from 'react';
import  { ThemeProvider } from 'styled-components'
import GlobalStyle from './styles/global';
import Layout from './Components/Layout';
import themes from './styles/themes'

function App() {
  const [theme, setTheme] = useState('dark')

  const curentTheme = useMemo(() => {
    return themes[theme] || themes.dark
    
  },[theme]);


  function handleToogleTheme(){
    setTheme(prevState => prevState === 'dark' ? 'light' : 'dark')
  };

  return (
    <ThemeProvider theme={curentTheme}>
      <GlobalStyle />
      <Layout 
        onToogleTheme={handleToogleTheme}
        selectedTheme={theme}
      />
    </ThemeProvider>
  );
};

export default App;
