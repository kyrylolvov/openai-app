export const MainContainer: CSSWithTheme = () => ({
  minHeight: '100vh',
  width: '100vw',
  transition: 'all 0.3s',
  background: 'var(--background-secondary)',
});

export const TopContainer: CSSWithTheme = (theme) => ({
  background: 'var(--background-main)',
  padding: '24px 0 0 0',
  boxSizing: 'border-box',

  [theme.breakpoints.down('sm')]: {
    justifyContent: 'center',
    padding: '24px 0 0 0',
  },
});

export const TopContainerInside: CSSWithTheme = (theme) => ({
  padding: '0 72px',
  boxSizing: 'border-box',

  [theme.breakpoints.down('sm')]: {
    padding: '0 24px',
  },
});

export const Seperator: CSSWithTheme = (theme) => ({
  '& svg': {
    '& path': { fill: 'var(--background-secondary)' },
  },

  [theme.breakpoints.down('sm')]: {
    marginTop: '48px',
  },
});

export const BodyContainer: CSSWithTheme = (theme) => ({
  marginTop: '-10px',
  padding: '24px 72px 48px 72px',
  boxSizing: 'border-box',
  width: '100%',
  background: 'var(--background-secondary)',

  [theme.breakpoints.down('sm')]: {
    padding: '24px',
  },
});
