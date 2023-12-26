import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 800,
        lg: 1050,
        xl:1200,
        xxl: 1536,
      },
    },
  });
  const fonts={
    'kanit': 'Kanit, sans-serif',
    'nuonito': 'Nunito, sans-serif',
    'nuonitoSans': 'Nunito Sans, sans-serif'
  }
  export /* default */ {theme,fonts} ;