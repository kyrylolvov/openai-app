import React, { useEffect } from 'react';
import { Box, Switch } from '@mui/material';

import { ReactComponent as SunIcon } from '../../assets/desktop/icon-sun.svg';
import { ReactComponent as MoonIcon } from '../../assets/desktop/icon-moon.svg';

import * as css from './css';
import getJobs from '../../api/search';
import { useAPI } from '../../hooks/useApi';

interface HeaderProps {
  isDarkTheme: boolean
  switchTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkTheme, switchTheme }) => {
  const { fetch: fetchJobs, state: jobsState } = useAPI(getJobs);

  useEffect(() => {
    fetchJobs({});
  }, []);

  console.log(jobsState.status);

  return (
    <Box css={css.MainContainer}>
      <Box css={css.LogoSwitchContainer}>
        <Box css={css.PageLogo} />
        <Box css={css.SwitchContainer}>
          <SunIcon />
          <Switch checked={isDarkTheme} onClick={switchTheme} css={css.ThemeSwitch} />
          <MoonIcon />
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
