export const MissingInfoHeader: CSSWithTheme = () => ({
  background: 'var(--background-main)',
  height: '100vh',
  width: '100vw',
});

export const MissingInfoText: CSSWithTheme = (theme) => ({
  fontSize: '18px',
  color: '#929292',
  lineHeight: '28px',

  [theme.breakpoints.down('md')]: {
    marginTop: '8px',
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '130%',
    padding: '0 30px',
  },
});
