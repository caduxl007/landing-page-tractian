import React, { createContext, useContext, useState } from 'react';
import { DefaultTheme, ThemeProvider as ThemeStyled } from 'styled-components';

import { usePersistedState } from '../utils/usePersistedState';

import light from '../styles/themes/light';
import dark from '../styles/themes/dark';

interface ThemeContextData {
  toggleTheme(): void;
  theme: DefaultTheme;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  function toggleTheme() {
    setTheme(theme.title === 'light' ? dark : light);
  }

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      <ThemeStyled theme={theme}>{children}</ThemeStyled>
    </ThemeContext.Provider>
  );
};

export function useTheme(): ThemeContextData {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within an ThemeProvider');
  }

  return context;
}

export { ThemeContext, ThemeProvider };
