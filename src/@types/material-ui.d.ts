import { Theme as MuiTheme } from '@mui/material/styles';

declare module '@emotion/react/types' {
  interface Theme extends MuiTheme {}
}
