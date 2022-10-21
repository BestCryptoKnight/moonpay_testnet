// import node modules
import { all, takeLatest } from 'redux-saga/effects';

// import saga
import {
    getCurrencySaga
} from './saga/currencySaga';

// import slices
import { getCurrencyRequest } from './slices/currencySlice';

function* rootSaga() {
    yield all([
        takeLatest(getCurrencyRequest.type, getCurrencySaga),
    ]);
};

export default rootSaga;