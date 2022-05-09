import React from 'react';
import { Box, Typography } from '@mui/material';

import { Help } from '@mui/icons-material';
import * as css from './css';

const Welcome: React.FC = () => (
  <Box css={css.WelcomeBox}>
    <Typography css={css.WelcomeTitle} variant="h2">
      AI communication web app powered by
      <span css={css.WelcomeTextAccent}> OpenAI Api</span>
    </Typography>
    <Typography css={css.WelcomeParagraph}>
      OpenAI has trained cutting-edge language models that are very good at understanding and generating text. Please,
      select one of the following categories to start communicating with the AI (you will be provided with examples).
    </Typography>
    <Box>
      <Box>
        <Box css={css.IconBox}>
          <Help />
        </Box>
      </Box>
    </Box>
  </Box>
);

export default Welcome;
