import React from 'react';
import {
  Box, Switch, Typography,
} from '@mui/material';
import { LightMode, DarkMode } from '@mui/icons-material';

import * as css from './css';

interface HeaderProps {
  isDarkTheme: boolean
  switchTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkTheme, switchTheme }) => (
  <Box css={css.HeaderBox}>
    <Box>
      <Typography css={css.LogoText} variant="h2">OpenAI App</Typography>
    </Box>
    <Box css={css.SwitchContainer}>
      <LightMode />
      <Switch
        checked={isDarkTheme}
        onClick={switchTheme}
        css={css.ThemeSwitch}
      />
      <DarkMode />
    </Box>
  </Box>
);

export default Header;
