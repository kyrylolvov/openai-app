export const MainContainer: CSSWithTheme = () => ({
  padding: '120px 165px',
  height: '100%',
});

export const CardsContainer: CSSWithTheme = () => ({
  backgroundColor: 'black',
  height: '50%',
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
