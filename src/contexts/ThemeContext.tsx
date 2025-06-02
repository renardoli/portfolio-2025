import type React from 'react';
import { createContext, useContext, useEffect, useState } from 'react';

type ThemeContextType = {
  isDark: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const updateTheme = (darkMode: boolean) => {
      setIsDark(darkMode);
      document.documentElement.setAttribute(
        'data-theme',
        darkMode ? 'dark' : 'light',
      );
    };

    if (savedTheme) {
      updateTheme(savedTheme === 'dark');
    } else {
      updateTheme(mediaQuery.matches);
    }

    const handleChange = () => {
      if (!localStorage.getItem('theme')) {
        updateTheme(mediaQuery.matches);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    localStorage.setItem('theme', next ? 'dark' : 'light');
    setIsDark(next);
    document.documentElement.setAttribute(
      'data-theme',
      next ? 'dark' : 'light',
    );
  };
  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within a ThemeProvider');
  return context;
};
