// import node modules
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga';

// import reducers
import currencyReducer from './slices/currencySlice';

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
    currency: currencyReducer
});

export const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false, thunk: false })
            .concat(sagaMiddleware)
})

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch