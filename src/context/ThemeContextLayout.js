import React, { createContext, useState } from 'react';

export const ThemeContextLayout = createContext();


export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('dark');

  function handleToogleTheme() {
    setTheme(prevState => prevState === 'dark' ? 'light' : 'dark')
  }
  return (
    <ThemeContextLayout.Provider value={{
      theme,
      handleToogleTheme
    }}>
      {children}
    </ThemeContextLayout.Provider>
  )
}

export class ThemeProviderClass extends React.Component {
  state = {
    theme: 'dark'
  }
  handleToogleTheme = () => {
    this.setState(prevState => ({theme: prevState.theme === 'dark' ? 'light' : 'dark'}), 
    () => {
      localStorage.setItem('theme', JSON.stringify(this.state.theme))
    }
    )
  }

  render() {
    return (

      <ThemeContextLayout.Provider value={{
        theme: this.state.theme,
        handleToogleTheme: this.handleToogleTheme
      }}>
        {this.props.children}
      </ThemeContextLayout.Provider>
    )
  }
}