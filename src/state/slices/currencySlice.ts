// import node modules
import { createSlice } from '@reduxjs/toolkit';

// import models
import { ICurrency } from '../../models';

const currencySlice = createSlice({
    name: 'currency',
    initialState: {
        getting: false,
        got: false,
        currencies: [] as ICurrency[],

        error: {}
    },
    reducers: {
        getCurrencyRequest(state) {
            state.getting = true;
            state.got = false;
        },
        getCurrencySuccess(state, action) {
            state.getting = false;
            state.got = true;
            state.currencies = action.payload.slice();
        },
        getCurrencyError(state, action) {
            state.getting = false;
            state.got = false;
            state.error = action.payload;
        }
    }
});

export const { getCurrencyRequest, getCurrencySuccess, getCurrencyError } = currencySlice.actions;
export default currencySlice.reducer;