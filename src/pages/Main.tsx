import React, { useRef } from 'react';
import { Box } from '@mui/material';
import useLocalStorage from 'use-local-storage';

import { ReactComponent as WaveSeperator } from '../assets/img/svg/wave.svg';

// import sendPrompt from '../api/prompt';
// import { useAPI } from '../hooks/useApi';

import * as css from './css';
import Header from '../components/Header';
import Welcome from '../components/Welcome';
import TextField from '../components/Textfield';

const Main: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

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
      <Box css={css.TopContainer}>
        <Box css={css.TopContainerInside}>
          <Header isDarkTheme={theme === 'dark'} switchTheme={switchTheme} />
          <Welcome />
        </Box>
        <Box css={css.Seperator}>
          <WaveSeperator />
        </Box>
      </Box>
      <Box ref={scrollRef} css={css.BodyContainer}>
        <TextField theme={theme} scrollRef={scrollRef} />
      </Box>
    </Box>
  );
};

export default Main;
