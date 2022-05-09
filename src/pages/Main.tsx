import React from 'react';
import { Box } from '@mui/material';
import useLocalStorage from 'use-local-storage';

import * as css from './css';

const Main: React.FC = () => {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  return (
    <Box css={css.MainContainer} data-theme={theme}>
      Nice
    </Box>
  );
};

export default Main;
