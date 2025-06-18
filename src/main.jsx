import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "slick-carousel/slick/slick.css";

import { ThemeProvider, useTheme } from './ThemeContext';
import ThemeSwitcher from './ThemeSwitcher';



const AppWrapper = () => {
  const { bgClass, textClass } = useTheme();

  return (
    <div className={`min-h-screen transition-all duration-500 ${bgClass} ${textClass}`}>
      <ThemeSwitcher />
      <App />
    </div>
  );
};



createRoot(document.getElementById('root')).render(
  <StrictMode>
      <ThemeProvider>
      <AppWrapper />
  
    </ThemeProvider>
  </StrictMode>,
)
