export const ModalContainer: CSSWithTheme = (theme) => ({
  backgroundColor: 'var(--modal-background)',
  outline: 'none',
  borderRadius: '6px',
  width: '550px',
  position: 'absolute',
  transform: 'translate(-50%, -50%)',
  boxSizing: 'border-box',
  padding: '32px',

  top: '50%',
  left: '50%',

  [theme.breakpoints.up(1584)]: {
    width: '40vw',
  },

  [theme.breakpoints.down('sm')]: {
    width: '80vw',
    padding: '32px 16px',
  },

  [theme.breakpoints.down(400)]: {
    width: '95vw',
  },
});

export const CloseButtonContainer: CSSWithTheme = (theme) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  margin: '-16px -16px auto auto',

  '& button': {
    '& svg': {
      color: 'var(--typograghy-secondary)',
      height: '1.25rem',
    },
  },

  [theme.breakpoints.down('sm')]: {
    margin: '-16px auto auto auto',
  },
});

export const ModalTitle: CSSWithTheme = () => ({
  textAlign: 'center',
  fontWeight: 800,
  fontSize: '1.5rem',
  color: 'var(--typograghy-main)',
});

export const ModalBody: CSSWithTheme = () => ({
  marginTop: '32px',
});

export const EngineSelectContol: CSSWithTheme = () => ({
  '& .Mui-focused': {
    '& fieldset': {
      border: '2px solid #5298e9 !important',
    },
  },

  '& .MuiInputLabel-root': {
    color: 'var(--typograghy-main)',

  },

  '& .MuiInputLabel-root.Mui-focused': {
    color: '#5298e9',
  },
});

export const EngineSelect: CSSWithTheme = () => ({
  backgroundColor: 'var(--input-background)',
  height: '3.9375rem',

  '& svg': {
    color: 'var(--typograghy-main)',
  },
});

export const EngineMenuItem: CSSWithTheme = () => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
});

export const EngineMenuItemTitle: CSSWithTheme = () => ({
  fontSize: '1rem',
  lineHeight: '1rem',
  fontWeight: 700,
  color: 'var(--typograghy-main) !important',
});

export const EngineMenuItemSubTitle: CSSWithTheme = () => ({
  color: 'var(--typograghy-secondary)',
  fontSize: '0.75rem',
  lineHeight: '0.75rem',
});

export const InputRow: CSSWithTheme = (theme) => ({
  marginTop: '24px',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gridGap: '24px',
  gap: '24px',

  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '1fr',
  },
});

export const Input: CSSWithTheme = (theme) => ({
  backgroundColor: 'var(--input-background)',
  color: 'var(--typograghy-main)',
  height: '63px',

  [theme.breakpoints.down('sm')]: {
    height: '3.9375rem',
  },

  [theme.breakpoints.up(1440)]: {
    height: '3.5rem',
  },
});

export const ButtonsContainer: CSSWithTheme = () => ({
  marginTop: '48px',
  display: 'flex',
  justifyContent: 'center',
});

export const ClearButton: CSSWithTheme = () => ({
  marginRight: '16px',
  padding: '0.375rem 1rem !important',
  height: '3rem',
  fontFamily: 'GreycliffCF',
  fontWeight: 700,
  letterSpacing: 1.5,
  borderRadius: '6px',
  color: 'var(--typograghy-secondary)',
  transition: 'all 0.2s',

  '&:hover': {
    color: 'var(--typograghy-secondary)',
    transform: 'scale(1.02)',
  },
});

export const SaveChangesButton: CSSWithTheme = () => ({
  padding: '0.375rem 1rem !important',
  height: '3rem',
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
