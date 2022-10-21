// import node modules
import React, { useState, useEffect } from 'react';

// import mui modules
import {
    ToggleButton,
    ToggleButtonGroup
} from '@mui/material';

// import styles
import { ToggleStyle } from './index.style';

type Props = {
    handleFilter: Function;
}

const ToggleComponent: React.FC<Props> = ({ handleFilter }) => {
    const [alignment, setAlignment] = useState(() => ['all']);
    const [filterAll, setFilterAll] = useState(true);
    const [filterUS, setFilterUS] = useState(false);
    const [filterTest, setFilterTest] = useState(false);

    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string
    ) => {
        // setAlignment(newAlignment);
        if (newAlignment === "all" && alignment.indexOf(newAlignment) === -1) {
            setAlignment(['all']);
            setFilterAll(true);
            setFilterUS(false);
            setFilterTest(false);
            return;
        } else if (newAlignment === "all" && alignment.indexOf(newAlignment) !== -1) {
            setAlignment(['']);
            setFilterAll(false);
            return;
        }

        setFilterAll(false);
        let currentAlignment = alignment.filter((each: string) => each !== "all");
        if (currentAlignment.indexOf(newAlignment) !== -1) {
            currentAlignment = currentAlignment.filter((each: string) => each !== newAlignment);
            if (newAlignment === "notUs") {
                setFilterUS(false);
            } else if (newAlignment === "notTest") {
                setFilterTest(false);
            }
        }
        else {
            currentAlignment = currentAlignment.concat(newAlignment);
            if (newAlignment === "notUs") {
                setFilterUS(true);
            } else if (newAlignment === "notTest") {
                setFilterTest(true);
            }
        }
        setAlignment(currentAlignment);
    }

    useEffect(() =>  {
        handleFilter(filterAll, filterUS, filterTest);
    }, [filterAll, filterUS, filterTest])

    return (
        <ToggleStyle>
            <ToggleButtonGroup
                color="primary"
                value={alignment}
                exclusive
                onChange={handleChange}
                aria-label="Platform"
            >
                <ToggleButton value="all"> All </ToggleButton>
                <ToggleButton value="notUs"> Not In US </ToggleButton>
                <ToggleButton value="notTest"> Not In Testnet </ToggleButton>
            </ToggleButtonGroup>
        </ToggleStyle>
    )
};

export default ToggleComponent;