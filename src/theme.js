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
  const color={
    light:{
      nav:'#ededed',
      surfacePrimary:'#f6f6f6',
      surfaceSecondary:'#ffffff',
      textPrimary:'#5e5e5e',
      textSecondary:'#00000099',
      navText:'#5e5e5e'
    },
    dark:{
      nav:'#1D2127',
      surfacePrimary:'#1D2127',
      surfaceSecondary:'#252930',
      textPrimary:'#D1D7E0',
      textSecondary:'#AAAEB6',
      navText:'#dedede'
    }

  }
  const fonts={
    'kanit': 'Kanit, sans-serif',
    'nuonito': 'Nunito, sans-serif',
    'nuonitoSans': 'Nunito Sans, sans-serif'
  }
  export /* default */ {theme,fonts, color} ;