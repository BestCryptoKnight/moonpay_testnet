// import node modules
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import components
import {
    HeaderComponent,
    CurrencyCardComponent,
    ToggleComponent,
    SortButtonComponent
} from '../../components';

// import mui modules
import {
    Box,
    Button,
    ButtonGroup,
    Grid
} from '@mui/material';

//import styles
import { MainPageStyle } from './index.style';

// import actions
import { getCurrencyRequest } from '../../state/slices/currencySlice';

// import store
import { RootState } from '../../state/store';

// import model
import { ICurrency } from '../../models';

const MainPage = () => {
    
    const dispatch = useDispatch();

    const { currencies, got } = useSelector((state: RootState) => state.currency);

    const [currentCurrencies, setCurrentCurrencies] = useState<ICurrency[]>([]);

    const handleFilterChange = (filterAll: boolean, filterUS: boolean, filterTest: boolean) => {
        let filteredCurrencies: ICurrency[] = currencies;
        
        if (filterAll === true) {
            setCurrentCurrencies(currencies);
        } else {
            if (filterUS === true) {
                filteredCurrencies = filteredCurrencies.filter((each: ICurrency) => each.isSupportedInUS);
            }
            if (filterTest === true) {
                filteredCurrencies = filteredCurrencies.filter((each: ICurrency) => each.supportsTestMode);
            }
        }

        setCurrentCurrencies(filteredCurrencies);
    }

    const handleSortByName = (orderBy: boolean) => {
        let sortedCurrencies: ICurrency[] = currentCurrencies.slice().sort((A: ICurrency, B: ICurrency) => orderBy ? ((A.name > B.name) ? 1 : -1) : ((A.name < B.name) ? 1 : -1));
        setCurrentCurrencies(sortedCurrencies);
    }

    const handleSortBySymbol = (orderBy: boolean) => {
        let sortedCurrencies: ICurrency[] = currentCurrencies.slice().sort((A: ICurrency, B: ICurrency) => orderBy ? ((A.code > B.code) ? 1 : -1) : ((A.name < B.name) ? 1 : -1));
        setCurrentCurrencies(sortedCurrencies);
    }

    const handleShuffle = () => {
        let shuffleCurrencies: ICurrency[] = currentCurrencies.slice();
        for (let i = shuffleCurrencies.length - 1 ; i >= 0 ; i --) {
            let randomIndex = Math.floor(Math.random() * i);
            [shuffleCurrencies[i], shuffleCurrencies[randomIndex]] = [shuffleCurrencies[randomIndex], shuffleCurrencies[i]]
        }
        setCurrentCurrencies(shuffleCurrencies);
    }

    useEffect(() => {
        dispatch(getCurrencyRequest());
    }, [dispatch]);

    useEffect(() => {
        setCurrentCurrencies(currencies);
    }, [got])

    return (
        <>
            <HeaderComponent />

            <MainPageStyle>
                <Box className="control-panel-box">
                    <Grid className="grid-box" container spacing={2}>
                        <Grid item>
                            <ToggleComponent handleFilter={handleFilterChange} />
                        </Grid>
                        <Grid item>
                            <ButtonGroup>
                                <SortButtonComponent orderBy="Name" handleClick={handleSortByName} />
                                <SortButtonComponent orderBy="Symbol" handleClick={handleSortBySymbol} />
                                <Button 
                                    className="shuffle-button"
                                    onClick={handleShuffle}
                                    variant="outlined"
                                > 
                                    SHUFFLE
                                </Button>
                            </ButtonGroup>
                        </Grid>
                    </Grid>
                </Box>

                <Box className="number-box">
                    Number of currencies: { currentCurrencies.length }
                </Box>

                <Grid className="card-container" container spacing={2}>
                    {
                        currentCurrencies.map((currency: ICurrency, index: number) => {
                            return (
                                <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
                                    <CurrencyCardComponent currency={currency} />
                                </Grid>
                            );        
                        })
                    }
                </Grid>
            </MainPageStyle>
        </>
    )
};

export default MainPage;