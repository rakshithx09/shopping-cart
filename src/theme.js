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
  export default theme ;