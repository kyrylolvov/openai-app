export const TextfieldBox: CSSWithTheme = (theme) => ({
  display: 'grid',
  gridTemplateColumns: '3fr 2fr',

  [theme.breakpoints.down(1100)]: {
    gridTemplateColumns: '1fr',
  },
});

export const RequestContainer: CSSWithTheme = (theme) => ({
  [theme.breakpoints.down('md')]: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

export const TextfieldTitle: CSSWithTheme = (theme) => ({
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

  [theme.breakpoints.down('md')]: {
    marginLeft: '0',
  },
});

export const ResponsesTitle: CSSWithTheme = () => ({
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
    left: '170px',
    height: '10px',
    width: '10px',
    borderRight: '5px solid var(--typograghy-main)',
    borderBottom: '5px solid var(--typograghy-main)',
  },
});

export const ResponsesTitleCount: CSSWithTheme = () => ({
  fontSize: '32px',
  fontWeight: 900,
  textTransform: 'uppercase',
  marginLeft: '18px',
  position: 'relative',
  color: 'var(--typograghy-main)',
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

export const PromptBox: CSSWithTheme = (theme) => ({
  display: 'grid',
  gridTemplateColumns: '1fr',
  width: '80%',

  '& .Mui-focused': {
    '& fieldset': {
      border: '2px solid var(--input-border-active) !important',
    },
  },

  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
});

export const ButtonBox: CSSWithTheme = () => ({
  marginTop: '16px',
  display: 'flex',
  width: '100%',
  justifyContent: 'flex-end',
});

export const SettingsButton: CSSWithTheme = () => ({
  marginRight: '16px',
  flexShrink: 0,

  '& svg': {
    color: 'var(--typograghy-secondary)',
  },
});

export const SubmitButton: CSSWithTheme = () => ({
  width: '106px',
  height: '48px',
  background: '#5298e9',
  fontFamily: 'GreycliffCF',
  fontWeight: 700,
  letterSpacing: 1.5,
  borderRadius: '6px',
  color: '#ffffff',
  transition: 'all 0.2s',

  '&:hover': {
    background: '#5298e9',
    color: '#ffffff',
    transform: 'scale(1.02)',
  },
});

export const Progress: CSSWithTheme = () => ({
  width: '22px !important',
  height: '22px !important',
  color: '#ffffff !important',
});

export const ExamplesContainer: CSSWithTheme = () => ({
  marginTop: '64px',
});

export const ResponsesContainer: CSSWithTheme = (theme) => ({
  [theme.breakpoints.down(1100)]: {
    marginTop: '64px',
  },
});

export const ResponsesTextContainer: CSSWithTheme = (theme) => ({
  display: 'flex',
  justifyContent: 'space-between',

  [theme.breakpoints.down(1100)]: {
    width: '80%',
  },

  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
});

export const ExampleCard: CSSWithTheme = () => ({
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  transition: 'all 0.2s',

  '&:hover': {
    transform: 'scale(1.02)',
  },
});

export const ExampleCardTextContainer: CSSWithTheme = () => ({
  marginLeft: '16px',
});

export const ExamplesWrapper: CSSWithTheme = (theme) => ({
  marginTop: '64px',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gap: '24px',
  gridGap: '24px',
  justifyItems: 'start',

  [theme.breakpoints.down(1350)]: {
    gridTemplateColumns: '1fr 1fr',
  },

  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr',
  },
});

export const ExampleCardTitle: CSSWithTheme = () => ({
  fontFamily: 'GreycliffCF',
  fontWeight: 700,
  color: 'var(--typograghy-main)',
});

export const ExampleCardParagraph: CSSWithTheme = () => ({
  color: 'var(--typograghy-secondary)',
});

export const IconBox = (background: string): CSSWithTheme => () => ({
  backgroundImage: `url(${background})`,
  flexShrink: 0,
  borderRadius: '6px',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  height: '56px',
  width: '56px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '& svg': {
    color: '#ffffff',
    height: '32px',
    width: '32px',
  },
});

export const ResponseContainer: CSSWithTheme = () => ({
  marginTop: '36px',
});

export const ResponseCard = (viewMore: boolean): CSSWithTheme => (theme) => ({
  height: viewMore ? 'auto' : '263px',
  boxSizing: 'border-box',
  backgroundColor: 'var(--background-main)',
  padding: '16px 32px',
  borderRadius: '6px',
  color: 'var(--typograghy-secondary)',
  border: '1px solid var(--input-border)',

  [theme.breakpoints.down(1100)]: {
    width: '80%',
  },

  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
});

export const ResponseCardRequestText = (viewMore: boolean): CSSWithTheme => () => ({
  whiteSpace: 'pre-line',
  overflow: 'hidden',
  display: viewMore ? 'block' : '-webkit-box',
  WebkitLineClamp: 3,
  WebkitBoxOrient: 'vertical',
  maxWidth: '300px',
  lineHeight: '24px',
});

export const ResponseCardResponseText = (viewMore: boolean): CSSWithTheme => () => ({
  whiteSpace: 'pre-line',
  overflow: 'hidden',
  display: viewMore ? 'block' : '-webkit-box',
  WebkitLineClamp: 3,
  WebkitBoxOrient: 'vertical',
  maxWidth: '300px',
  lineHeight: '24px',
});

export const RequestRow: CSSWithTheme = () => ({
  display: 'grid',
  gridTemplateColumns: '1fr 3fr',
});

export const RequestRowTitle: CSSWithTheme = () => ({
  fontFamily: 'GreycliffCF',
  fontWeight: 700,
  color: 'var(--typograghy-main)',
  maxWidth: '100px',
});

export const ViewMoreText: CSSWithTheme = () => ({
  color: '#5298e9',
  cursor: 'pointer',
});

export const ArrowIcon: CSSWithTheme = () => ({
  '& svg': {
    color: '#5298e9',
    height: '32px',
    width: '32px',
  },
});

export const ArrowContainer: CSSWithTheme = (theme) => ({
  marginTop: '16px',
  display: 'flex',
  justifyContent: 'right',

  [theme.breakpoints.down(1100)]: {
    width: '80%',
  },

  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
});

export const NotFoundContainer: CSSWithTheme = (theme) => ({
  marginTop: '32px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '263px',

  '& svg': {
    height: '15vw',
    width: '15vw',
  },

  '& p': {
    fontSize: '24px',
    marginTop: '24px',
    fontFamily: 'GreycliffCF',
    fontWeight: 700,
    color: 'var(--typograghy-main)',
  },

  [theme.breakpoints.down(1100)]: {
    '& svg': {
      height: '70vw',
      width: '80vw',
    },
  },
});
