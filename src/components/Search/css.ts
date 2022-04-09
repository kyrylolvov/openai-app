export const MainContainer: CSSWithTheme = (theme) => ({
  backgroundColor: 'var(--background-secondary)',
  margin: '0 165px',
  width: 'calc(100% - 330px)',
  position: 'absolute',
  top: '120px',
  borderRadius: '6px',
  transition: 'all 0.3s',
  display: 'grid',
  gridTemplateColumns: '10fr 8fr 8fr',

  [theme.breakpoints.down('lg')]: {
    margin: '0 80px',
    width: 'calc(100% - 160px)',
  },

  [theme.breakpoints.down('md')]: {
    margin: '0 40px',
    width: 'calc(100% - 80px)',
    gridTemplateColumns: '8fr 8fr 10fr',
  },

  [theme.breakpoints.down('sm')]: {
    margin: '0 24px',
    width: 'calc(100% - 44px)',
  },
});

export const SearchContainer: CSSWithTheme = () => ({
  padding: '28px 32px',
  display: 'flex',
  alignItems: 'center',
  maxWidth: '400px',
  borderRight: '1px solid var(--search-borer)',
});

export const LocationContainer: CSSWithTheme = () => ({
  padding: '28px 24px',
  display: 'flex',
  alignItems: 'center',
  maxWidth: '300px',
  borderRight: '1px solid var(--search-borer)',
});

export const ButtonContainer: CSSWithTheme = (theme) => ({
  padding: '16px 16px 16px 32px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  maxWidth: '300px',

  [theme.breakpoints.down('lg')]: {
    padding: '28px 16px 28px 20px',
  },
});

export const SearchInput: CSSWithTheme = () => ({
  margin: '0 0 0 16px',
  color: 'var(--typograpgy-main)',
  transition: 'all 0.3s',
  maxWidth: '275px',
  width: '80%',

  '& input': {
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    caretColor: 'var(--button-background)',
  },
});

export const CheckboxControl = (checked: boolean): CSSWithTheme => () => ({
  '& .MuiCheckbox-root': {
    color: 'transparent',

    '& .MuiSvgIcon-root': {
      zIndex: checked ? 2 : 1,
    },
  },

  '& .MuiCheckbox-root:after': {
    content: '""',
    left: 12,
    top: 12,
    height: 18,
    width: 18,
    position: 'absolute',
    borderRadius: '3px',
    backgroundColor: checked ? 'var(--button-text-color)' : 'var(--checkbox-unchecked)',
    zIndex: 1,
    transition: 'all 0.3s',
  },

  '& .Mui-checked': {
    color: 'var(--checkbox-checked) !important',
  },

  '& .MuiTypography-root': {
    color: 'var(--typograpgy-main)',
    fontWeight: 700,
    lineHeight: '20px',
    userSelect: 'none',
    transition: 'all 0.3s',
  },

  '&:hover': {
    '& .MuiCheckbox-root:after': {
      backgroundColor: checked ? 'var(--button-text-color)' : 'var(--button-hover)',
    },
  },
});

export const SearchButton: CSSWithTheme = (theme) => ({
  backgroundColor: 'var(--button-background)',
  color: 'var(--button-text-color)',
  fontWeight: 700,
  lineHeight: '20px',
  padding: '12px 36px',
  textTransform: 'none',
  transition: 'all 0.3s',

  [theme.breakpoints.down('lg')]: {
    padding: '12px 14px',
  },

  '&:hover': {
    backgroundColor: 'var(--button-hover)',
    color: 'var(--button-text-color)',
  },
});
