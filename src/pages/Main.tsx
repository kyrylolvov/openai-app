import React from 'react';
import { Box } from '@mui/material';
import useLocalStorage from 'use-local-storage';

// import sendPrompt from '../api/prompt';
// import { useAPI } from '../hooks/useApi';

import * as css from './css';
import Header from '../components/Header';
import Welcome from '../components/Welcome';

const Main: React.FC = () => {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  // const { state: openAiState, fetch: fetchOpenAi } = useAPI(sendPrompt);

  // useEffect(() => {
  //   fetchOpenAi({});
  // }, []);

  // console.log(openAiState);

  return (
    <Box css={css.MainContainer} data-theme={theme}>
      <Header isDarkTheme={theme === 'dark'} switchTheme={switchTheme} />
      <Welcome />
    </Box>
  );
};

export default Main;
