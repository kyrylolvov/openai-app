import backgroundQa from '../../assets/img/backgrounds/backgroundQa.png';

export const WelcomeBox: CSSWithTheme = () => ({
  width: '60vw',
  margin: '48px auto 0 auto',
});

export const WelcomeTitle: CSSWithTheme = () => ({
  fontWeight: 900,
  color: 'var(--typograghy-main)',
});

export const WelcomeTextAccent: CSSWithTheme = () => ({
  background: 'linear-gradient(52deg, rgb(28, 126, 214) 3%, rgb(34, 184, 207) 97%)',
  backgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
});

export const WelcomeParagraph: CSSWithTheme = () => ({
  marginTop: '24px',
  color: 'var(--typograghy-secondary)',
});

export const IconBox: CSSWithTheme = () => ({
  backgroundImage: `url(${backgroundQa})`,
  borderRadius: '6px',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center',
  height: '56px',
  width: '56px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '& svg': {
    fill: '#ffffff',
    height: '24px',
    width: '24px',
  },
});
