import React, { createContext, useEffect, useState } from 'react';
export const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark_mode');
  useEffect(() => {
     document.body.classList.add(theme);
    return () => {
      document.body.classList.remove(theme);
    };
  }, [theme]);
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light_mode' ? 'dark_mode' : 'light_mode'));
  };
  
  // Provide the theme value and toggle function to the children components
  return (
    <ThemeContext.Provider value={{ theme , toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};