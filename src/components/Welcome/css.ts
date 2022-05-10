export const WelcomeBox: CSSWithTheme = (theme) => ({
  margin: '64px auto 0 auto',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gridGap: '32px',
  gap: '32px',
  alignItems: 'center',

  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr',
    textAlign: 'center',
    gridGap: '48px',
    gap: '48px',
  },
});

export const WelcomeTitle: CSSWithTheme = (theme) => ({
  fontWeight: 900,
  color: 'var(--typograghy-main)',

  [theme.breakpoints.down(1150)]: {
    fontSize: '44px',
  },

});

export const WelcomeTextAccent: CSSWithTheme = () => ({
  background: 'linear-gradient(52deg, rgb(28, 126, 214) 3%, rgb(34, 184, 207) 97%)',
  backgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
});

export const WelcomeParagraph: CSSWithTheme = (theme) => ({
  marginTop: '24px',
  fontSize: '14px',
  color: 'var(--typograghy-secondary)',

  [theme.breakpoints.down(1150)]: {
    fontSize: '12px',
  },
});

export const WelcomeIllustrationContainer: CSSWithTheme = (theme) => ({
  display: 'flex',
  justifyContent: 'flex-end',

  [theme.breakpoints.down('md')]: {
    justifyContent: 'center',
  },
});

export const WelcomeIllustration: CSSWithTheme = (theme) => ({
  width: '40vw',
  maxHeight: '400px',

  [theme.breakpoints.down('md')]: {
    width: '70vw',
  },

  [theme.breakpoints.down('sm')]: {
    width: '85vw',
  },
});
