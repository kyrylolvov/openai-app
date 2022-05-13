export const WelcomeBox: CSSWithTheme = (theme) => ({
  margin: '96px auto 0 auto',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gridGap: '32px',
  gap: '32px',
  alignItems: 'center',

  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr',
    marginTop: '56px',
    textAlign: 'center',
    gridGap: '48px',
    gap: '48px',
  },
});

export const WelcomeTitle: CSSWithTheme = (theme) => ({
  fontWeight: 900,
  color: 'var(--typograghy-main)',
  animation: '1.2s ease-out 0s 1 slideInFromLeft',

  [theme.breakpoints.down(1150)]: {
    fontSize: '2.75rem',
  },

  [theme.breakpoints.down('sm')]: {
    fontSize: '2.25rem',
  },
});

export const WelcomeTextAccent: CSSWithTheme = () => ({
  background: 'linear-gradient(52deg, rgb(28, 126, 214) 3%, rgb(34, 184, 207) 97%)',
  backgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
});

export const WelcomeParagraph: CSSWithTheme = () => ({
  marginTop: '24px',
  fontSize: '0.875rem',
  color: 'var(--typograghy-secondary)',
  animation: '1.2s ease-out 0s 1 slideInFromLeft',
});

export const WelcomeIllustrationContainer: CSSWithTheme = (theme) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  animation: '1.2s ease-out 0s 1 slideInFromRight',

  [theme.breakpoints.down('md')]: {
    justifyContent: 'center',
  },
});

export const WelcomeIllustration: CSSWithTheme = (theme) => ({
  width: '45vw',
  maxHeight: '30vw',

  [theme.breakpoints.down('md')]: {
    width: '70vw',
    maxHeight: '60vw',
  },

  [theme.breakpoints.down('sm')]: {
    width: '85vw',
  },
});
