import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [bgClass, setBgClass] = useState('bg-white');
  const [textClass, setTextClass] = useState('text-black');

  const changeTheme = (bg, text) => {
    setBgClass(bg);
    setTextClass(text);
  };

  return (
    <ThemeContext.Provider value={{ bgClass, textClass, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
