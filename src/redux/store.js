import { configureStore } from '@reduxjs/toolkit'
import { getPersistConfig } from 'redux-deep-persist'
import { persistReducer, persistStore } from 'redux-persist'
import DBstorage from 'redux-persist-indexeddb-storage'
import getStoredState from 'redux-persist/es/getStoredState'
import storage from 'redux-persist/lib/storage'
import philosophersDataReducer from '../components/home-page/homePageRedux/homePageRedux'

// old storage method
const persistConfig = getPersistConfig({
    key: 'root',
    storage,
    blacklist: ['currentData', 'originalData', 'options', 'quotesLoaded'],
    rootReducer: philosophersDataReducer,
})

// new storage method
const newPersistConfig = getPersistConfig({
    key: 'root',
    storage: DBstorage('myDB'),
    blacklist: ['currentData', 'originalData', 'options', 'quotesLoaded'],
    rootReducer: philosophersDataReducer,
    migrate: async (state) => {
        if (state === undefined) {
            const asyncState = await getStoredState(persistConfig)
            return asyncState
        } else return state
    },
})

const philosophersDataSlice = persistReducer(newPersistConfig, philosophersDataReducer)

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
