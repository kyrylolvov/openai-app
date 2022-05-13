export const HeaderBox: CSSWithTheme = () => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  animation: '1s ease-out 0s 1 slideInFromTop',
});

export const LogoText: CSSWithTheme = () => ({
  fontWeight: 900,
  fontSize: '1.5rem',
  color: 'var(--typograghy-main)',
});

export const SwitchContainer: CSSWithTheme = (theme) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',

  '& svg': {
    fill: 'var(--typograghy-secondary)',
  },

  [theme.breakpoints.down('sm')]: {
    justifyContent: 'center',
  },
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
    backgroundColor: '#ffffff',
    width: 14,
    height: 14,
    transition: 'all 0.2s',
  },
  '& .MuiSwitch-track': {
    borderRadius: '12px',
    backgroundColor: 'var(--typograghy-secondary) !important',
    opacity: '1 !important',
  },

  '&:hover': {
    '& .MuiSwitch-thumb': {
      backgroundColor: 'var(--background-main)',
      transition: '0.2s',
    },
  },
});
