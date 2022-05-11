import React from 'react';
import { Box, Typography } from '@mui/material';

import { ReactComponent as Communicate } from '../../assets/img/illustration/Communicate.svg';

import * as css from './css';

const Welcome: React.FC = () => {
  console.log('welcome');

  return (
    <Box css={css.WelcomeBox}>
      <Box>
        <Typography css={css.WelcomeTitle} variant="h2">
          AI communication web app powered by
          <span css={css.WelcomeTextAccent}> OpenAI Api</span>
        </Typography>
        <Typography css={css.WelcomeParagraph}>
          OpenAI has trained cutting-edge language models that are very good at understanding and generating text. Please,
          use the textfield to communicate with AI. If you need any assistance, select one of the categories below the prompt
          field.
        </Typography>
      </Box>
      <Box>
        <Box css={css.WelcomeIllustrationContainer}>
          <Communicate css={css.WelcomeIllustration} />
        </Box>
      </Box>
    </Box>
  );
};

export default Welcome;
