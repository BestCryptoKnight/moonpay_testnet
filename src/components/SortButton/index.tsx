// import node modules
import React, { useState, useEffect } from 'react';

// import mui modules
import {
    Button,
} from '@mui/material';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

// import styles
import { SortButtonStyle } from './index.style';

type Props = {
    orderBy: string;
    handleClick: Function;
}

const SortButtonComponent: React.FC<Props> = ({ orderBy, handleClick }) => {
    const [sortOrder, setSortOrder] = useState(true);
    const onClick = () => {
        setSortOrder(!sortOrder);
    }

    useEffect(() => {
        handleClick(sortOrder);
    }, [sortOrder])

    return (
        <SortButtonStyle>
            <Button 
                className="button-box"
                onClick={onClick} 
                variant="outlined" 
                startIcon={
                    sortOrder 
                    ? <ArrowDropDownIcon />
                    : <ArrowDropUpIcon />
                }>
                { orderBy }
            </Button>
        </SortButtonStyle>
    )
};

export default SortButtonComponent;