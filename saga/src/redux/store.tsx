import createSagaMiddleware from 'redux-saga';
import { configureStore  } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import peoples from './peoples'
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    devTools: true,
    reducer: {
        peoples,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export const useStoreDispatch = () => useDispatch<typeof store.dispatch>()
export type RootState = ReturnType<typeof store.getState>

