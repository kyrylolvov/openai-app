export const TextfieldBox: CSSWithTheme = () => ({
  display: 'grid',
  gridTemplateColumns: '3fr 2fr',
  gridGap: '64px',
  gap: '64px',
});

export const TextfieldTitle: CSSWithTheme = () => ({
  fontSize: '32px',
  fontWeight: 900,
  marginLeft: '18px',
  textTransform: 'uppercase',
  position: 'relative',
  color: 'var(--typograghy-main)',

  '&:before': {
    content: '""',
    position: 'absolute',
    top: '-10px',
    left: '-18px',
    height: '10px',
    width: '10px',
    borderLeft: '5px solid var(--typograghy-main)',
    borderTop: '5px solid var(--typograghy-main)',
  },

  '&:after': {
    content: '""',
    position: 'absolute',
    top: '35px',
    left: '220px',
    height: '10px',
    width: '10px',
    borderRight: '5px solid var(--typograghy-main)',
    borderBottom: '5px solid var(--typograghy-main)',
  },
});

export const ExamplesTitle: CSSWithTheme = () => ({
  fontSize: '32px',
  fontWeight: 900,
  textTransform: 'uppercase',
  marginLeft: '18px',
  position: 'relative',
  color: 'var(--typograghy-main)',

  '&:before': {
    content: '""',
    position: 'absolute',
    top: '-10px',
    left: '-18px',
    height: '10px',
    width: '10px',
    borderLeft: '5px solid var(--typograghy-main)',
    borderTop: '5px solid var(--typograghy-main)',
  },

  '&:after': {
    content: '""',
    position: 'absolute',
    top: '35px',
    left: '155px',
    height: '10px',
    width: '10px',
    borderRight: '5px solid var(--typograghy-main)',
    borderBottom: '5px solid var(--typograghy-main)',
  },
});

export const PromptInput: CSSWithTheme = () => ({
  marginTop: '36px',
  backgroundColor: 'var(--input-background)',
  color: 'var(--typograghy-secondary)',

  '& .MuiOutlinedInput-notchedOutline': {
    border: '1px solid var(--input-border)',
    outline: 'none',
  },

  '&:hover': {
    '& .MuiOutlinedInput-notchedOutline': {
      border: '1px solid var(--input-border)',
    },
  },
});

export const PromptBox: CSSWithTheme = () => ({
  display: 'grid',
  gridTemplateColumns: '1fr',
  width: '80%',

  '& .Mui-focused': {
    '& fieldset': {
      border: '2px solid var(--input-border-active) !important',
    },
  },
});

export const ButtonBox: CSSWithTheme = () => ({
  marginTop: '16px',
  display: 'flex',
  width: '100%',
  justifyContent: 'flex-end',
});

export const SubmitButton: CSSWithTheme = () => ({
  padding: '12px 32px',
  background: '#5298e9',
  fontFamily: 'GreycliffCF',
  fontWeight: 700,
  letterSpacing: 1.5,
  color: '#ffffff',
  transition: 'all 0.2s',

  '&:hover': {
    background: '#5298e9',
    color: '#ffffff',
    transform: 'scale(1.03)',
  },
});
