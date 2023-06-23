import React, { useState , createContext } from 'react';


export const ThemeContext = createContext('dark');


export function ThemeProvider(props) {
  const [theme, setTheme] = useState('dark');
  return (
    <ThemeContext.Provider
      value={theme}
    >
      {props.children}
    </ThemeContext.Provider>
  )
}

