import BackgroundPatternDesktop from '../../assets/desktop/bg-pattern-header.svg';
import BackgroundPatternTablet from '../../assets/tablet/bg-pattern-header.svg';
import BackgroundPatternMobile from '../../assets/mobile/bg-pattern-header.svg';

import Logo from '../../assets/desktop/logo.svg';

export const MainContainer: CSSWithTheme = (theme) => ({
  backgroundColor: 'var(--background-header)',
  width: '100%',
  height: '160px',
  borderRadius: '0 0 0 100px',
  backgroundImage: `url(${BackgroundPatternDesktop})`,
  backgroundSize: 'cover',

  [theme.breakpoints.down('md')]: {
    height: '160px',
    backgroundImage: `url(${BackgroundPatternTablet})`,
  },

  [theme.breakpoints.down('sm')]: {
    height: '136px',
    borderRadius: 0,
    backgroundImage: `url(${BackgroundPatternMobile})`,
  },
});

export const LogoSwitchContainer: CSSWithTheme = (theme) => ({
  padding: '45px 165px',
  display: 'flex',
  justifyContent: 'space-between',

  [theme.breakpoints.down('md')]: {
    padding: '42px 40px',
  },

  [theme.breakpoints.down('sm')]: {
    padding: '32px 24px',
  },
});

export const PageLogo: CSSWithTheme = () => ({
  width: '115px',
  height: '32px',
  backgroundImage: `url(${Logo})`,
  backgroundPosition: 'left',
  backgroundSize: 'cover',
});

export const SwitchContainer: CSSWithTheme = () => ({
  display: 'flex',
  alignItems: 'center',
});

export const ThemeSwitch: CSSWithTheme = () => ({
  width: 42,
  height: 24,
  padding: 0,
  margin: '0 16px',
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 5,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(18px)',
      color: '#fff',
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: 'none !important',
    backgroundColor: 'var(--button-background)',
    width: 14,
    height: 14,
  },
  '& .MuiSwitch-track': {
    borderRadius: '12px',
    backgroundColor: 'var(--button-text-color) !important',
    opacity: '1 !important',
  },

  '&:hover': {
    '& .MuiSwitch-thumb': {
      backgroundColor: 'var(--button-hover)',
      transition: '0.2s',
    },
  },
});
