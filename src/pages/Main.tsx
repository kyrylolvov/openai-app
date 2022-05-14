import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography } from '@mui/material';
import useLocalStorage from 'use-local-storage';

import { ReactComponent as WaveSeperator } from '../assets/img/svg/wave.svg';

import sendPrompt from '../api/prompt';
import { useAPI } from '../hooks/useApi';

import Header from '../components/Header';
import Welcome from '../components/Welcome';
import TextField from '../components/Textfield';

import { PromptResponse } from '../utils/types';

import * as css from './css';

const Main: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');
  const responsesStored = localStorage.getItem('responses') ?? '';

  const [currentPrompt, setCurrentPrompt] = useState('');
  const [responses, setResponses] = useState<PromptResponse[]>((!responsesStored ? [] : JSON.parse(responsesStored)));

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  const { state: openAiState, fetch: fetchOpenAi } = useAPI(sendPrompt);

  useEffect(() => {
    if (openAiState.status === 'FULFILLED' && !!currentPrompt.length) {
      if (responses.find((x) => x.prompt === currentPrompt) && responses.find((x) => x.response === openAiState.data.choices[0].text)) {
        setResponses!((prev) => prev.filter((el) => el.prompt !== currentPrompt));
      }
      setResponses!((prev) => [{ prompt: currentPrompt, response: openAiState.data.choices[0].text }, ...prev]);
    }
  }, [openAiState.status]);

  useEffect(() => {
    if (responses.length >= 10) { setResponses!((prev) => [...prev.slice(0, -1)]); }
    localStorage.setItem('responses', JSON.stringify(responses));
  }, [responses]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <Box css={css.MainContainer}>
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
        <TextField
          setResponses={setResponses}
          responses={responses}
          fetchStatus={openAiState.status}
          setCurrentPrompt={setCurrentPrompt}
          fetchOpenAi={fetchOpenAi}
          scrollRef={scrollRef}
        />
      </Box>
      <Typography css={css.Author}>
        Designed and developed by
        {' '}
        <a target="_blank" href="https://www.linkedin.com/in/kyrylolvov/" rel="noreferrer">Kyrylo Lvov</a>
      </Typography>
    </Box>
  );
};

export default Main;
