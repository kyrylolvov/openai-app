import React from 'react';
import { Box, Button } from '@mui/material';
import useLocalStorage from 'use-local-storage';

import * as css from './css';

const Main: React.FC = () => {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (
    <Box css={css.MissingInfoHeader} data-theme={theme}>
      <Button onClick={switchTheme}>Theme</Button>
    </Box>
  );
};

export default Main;
