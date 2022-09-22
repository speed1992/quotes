import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import philosophersDataReducer from '../components/home-page/homePageReduxSlice/homePageReduxSlice';

const persistConfig = {
    key: 'root',
    storage,
}

const philosophersDataSlice = persistReducer(persistConfig, philosophersDataReducer)

export const store = configureStore({
    reducer: {
        philosophersData: philosophersDataSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
    devTools: process.env.NODE_ENV !== 'production',
})

export const persistor = persistStore(store);
