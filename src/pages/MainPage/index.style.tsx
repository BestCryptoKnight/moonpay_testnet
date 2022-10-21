// import mui modules
import {
    styled,
} from '@mui/material';

export const MainPageStyle = styled('main')(({ theme }: any ) => {
    return {
        paddingTop: '9rem',

        '.control-panel-box': {
            backgroundColor: theme.bg.secondary,
            display: 'flex',
            justifyContent: 'space-around',
            width: '100%',
            minHeight: '5rem',
            borderStyle: 'dotted',
            borderRadius: '1rem',
            borderWidth: '1px',
            boxShadow: '0.2rem 0.2rem 0.2rem rgba(0,0,0,0.3)',
            alignItems: 'center',

            '.grid-box': {
                paddingTop: '0.5rem',
                paddingBottom: '0.5rem',
                width: "95%",
                justifyContent: 'space-around',
                alignItems: 'ceneter'
            },

            '.shuffle-button': {
                height: '3rem',
            }
        },

        '.card-container': {
            width: '90%',
            margin: 'auto',
            marginTop: '1.5rem',
        },

        '.number-box': {
            marginTop: '3rem',
            width: '100%',
            height: '0.5rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '1.5rem',
            fontWeight: '500',
            color: theme.text.primary,
        }
    }
})