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

  [theme.breakpoints.down('sm')]: {
    width: '80vw',
  },
});

export const CloseButtonContainer: CSSWithTheme = () => ({
  display: 'flex',
  justifyContent: 'flex-end',
  margin: '-16px -16px auto auto',

  '& button': {
    '& svg': {
      color: 'var(--typograghy-secondary)',
      height: '24px',
      width: '24px',
    },
  },
});

export const ModalTitle: CSSWithTheme = () => ({
  textAlign: 'center',
  fontWeight: 800,
  fontSize: '24px',
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
  height: '63px',

  '& svg': {
    color: 'var(--typograghy-main)',
  },

  '& fieldset': {
    borderColor: '#cfd4d9 !important',
  },
});

export const EngineMenuItem: CSSWithTheme = () => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
});

export const EngineMenuItemTitle: CSSWithTheme = () => ({
  fontSize: '16px',
  lineHeight: '16px',
  fontWeight: 700,
  color: 'var(--typograghy-main) !important',
});

export const EngineMenuItemSubTitle: CSSWithTheme = () => ({
  color: 'var(--typograghy-secondary)',
  fontSize: '12px',
  lineHeight: '14px',
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

export const Input: CSSWithTheme = () => ({
  backgroundColor: 'var(--input-background)',
  color: 'var(--typograghy-main)',
  height: '63px',

  '& fieldset': {
    borderColor: '#cfd4d9 !important',
  },
});

export const ButtonsContainer: CSSWithTheme = () => ({
  marginTop: '48px',
  display: 'flex',
  justifyContent: 'center',
});

export const ClearButton: CSSWithTheme = () => ({
  marginRight: '16px',
  padding: '6px 16px !important',
  height: '48px',
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
  padding: '6px 16px !important',
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
