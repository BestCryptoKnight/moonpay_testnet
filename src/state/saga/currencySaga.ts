// import node modules
import { call, put } from 'redux-saga/effects';

// import api
import { CurrencyAPI } from '../../api';

// import actions
import { getCurrencyError, getCurrencySuccess } from '../slices/currencySlice';

// import models
import { ICurrency } from '../../models';

export function* getCurrencySaga () {
    try {
        const data: ICurrency[] = yield call(CurrencyAPI.getCurrency);
        if (data) {
            yield put(getCurrencySuccess(data));
        }
    } catch (err) {
        yield put(getCurrencyError(err));
    }
}