// import mui modules
import {
    styled,
} from '@mui/material';

export const HeaderStyle = styled('main')(({ theme }: any ) => {
    return {
        position: 'fixed',
        left: 0,
        right: 0,
        top: 0,
        backgroundColor: theme.bg.primary,
        color: theme.text.primary,
        zIndex: 100,
        height: '7rem',
        boxShadow: '0rem 0.1rem 0.2rem rgba(0,0,0,0.5)',

        '.header-box': {
            margin: 0,
            width: '100%',
            color: 'white',
            display: 'flex',

            [theme.breakpoints.up('sm')]: {
                padding: '0rem 2rem'
            },

            '.header-logo': {
                width: '15rem',
                height: '7rem',
                margin: 'auto',
                
                '.logo-image': {
                    width: '100%',
                    height: '100%'
                }
            }
        },
    }
})