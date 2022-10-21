// import node modules
import React from 'react';

// import mui modules
import { 
    Box,
    Button,
} from '@mui/material';

// import styles
import { HeaderStyle } from './index.style';

const HeaderComponent: React.FC = () => {
    return (
        <HeaderStyle>
            <Box className="header-box">
                <svg className="header-logo">
                    <image className='logo-image' href="logo_black.svg" />
                </svg>
            </Box>
        </HeaderStyle>
    )
};

export default HeaderComponent;