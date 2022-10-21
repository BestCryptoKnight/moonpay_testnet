import { createTheme } from '@mui/material/styles';

const themeColors = {
    bg: {
        primary: '#2196f3',
        secondary: 'white',
    },
    text: {
        primary: 'black',
        secondary: 'white',
    },
    danger: {
        primary: '#db4a5c'
    }
} as const;

const lightTheme = createTheme({
    ...themeColors,
    palette: {
        mode: 'light'
    }
});

export default lightTheme;