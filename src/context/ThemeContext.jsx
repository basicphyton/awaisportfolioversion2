import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const themes = [
  {
    id: 'violet',
    name: 'Electric Violet',
    primary: '#8b5cf6',
    secondary: '#3b82f6',
    bg: '#090d16',
    previewGradient: 'from-purple-600 to-blue-500',
  },
  {
    id: 'emerald',
    name: 'Neo Emerald',
    primary: '#10b981',
    secondary: '#06b6d4',
    bg: '#061412',
    previewGradient: 'from-emerald-500 to-cyan-500',
  },
  {
    id: 'sunset',
    name: 'Cosmic Sunset',
    primary: '#f43f5e',
    secondary: '#f59e0b',
    bg: '#180a0a',
    previewGradient: 'from-rose-500 to-amber-500',
  },
  {
    id: 'sapphire',
    name: 'Deep Sapphire',
    primary: '#38bdf8',
    secondary: '#6366f1',
    bg: '#0b132b',
    previewGradient: 'from-sky-400 to-indigo-500',
  },
];

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'violet';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('portfolio-theme', currentTheme);
  }, [currentTheme]);

  const setTheme = (themeId) => {
    if (themes.some((t) => t.id === themeId)) {
      setCurrentTheme(themeId);
    }
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
