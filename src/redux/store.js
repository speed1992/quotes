import { configureStore } from '@reduxjs/toolkit'
import { getPersistConfig } from 'redux-deep-persist'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import philosophersDataReducer from '../components/home-page/homePageRedux/homePageRedux'

const persistConfig = getPersistConfig({
    key: 'root',
    storage,
    blacklist: ['currentData', 'originalData', 'options', 'quotesLoaded'],
    rootReducer: philosophersDataReducer, // your root reducer must be also passed here
})

const philosophersDataSlice = persistReducer(persistConfig, philosophersDataReducer)

export const store = configureStore({
    reducer: {
        philosophersData: philosophersDataSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
    devTools: process.env.NODE_ENV !== 'production',
})

export const persistor = persistStore(store)
