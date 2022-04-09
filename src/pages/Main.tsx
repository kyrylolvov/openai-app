import React from 'react';
import { Box } from '@mui/material';
import useLocalStorage from 'use-local-storage';

import Header from '../components/Header/Header';

import * as css from './css';
import Search from '../components/Search/Search';
import Cards from '../components/Cards/Cards';

const Main: React.FC = () => {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (
    <Box css={css.MainContainer} data-theme={theme}>
      <Header switchTheme={switchTheme} isDarkTheme={theme === 'dark'} />
      <Search />
      <Cards />
    </Box>
  );
};

export default Main;
