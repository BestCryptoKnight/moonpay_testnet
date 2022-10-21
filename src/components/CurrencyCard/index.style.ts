// import mui modules
import {
    styled
} from '@mui/material';

export const CurrencyCardStyle = styled('main')(({ theme }: any ) => {
    return {
        '.card-box': {
            maxWidth: '50rem',
            display: 'block',
            boxShadow: '0.3rem 0.3rem 0.3rem rgba(0,0,0,0.3) !important',
            backgroundColor: `white !important`,
            borderStyle: 'dotted',
            borderRadius: '1rem',
            borderWidth: '0.5px',

            [theme.breakpoints.up('md')]: {
                // width: '30rem',
                width: '25%',
            },

            [theme.breakpoints.up('lg')]: {
                // width: '30rem',
                width: '25%'
            },

            [theme.breakpoints.up('xs')]: {
                // width: '21rem',
                width: '90%'
            },

            [theme.breakpoints.up('sm')]: {
                // width: '20rem',
                width: '30'
            },
        }
    }
});