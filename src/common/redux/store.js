import { configureStore } from '@reduxjs/toolkit'
import { getPersistConfig } from 'redux-deep-persist'
import { persistReducer, persistStore } from 'redux-persist'
import DBstorage from 'redux-persist-indexeddb-storage'
import philosophersDataReducer from '../../components/organisms/home/home-page/homePageRedux/homePageRedux'

const newPersistConfig = getPersistConfig({
    key: 'root',
    storage: DBstorage('myDB'),
    blacklist: ['currentData', 'originalData', 'quotesLoaded'],
    rootReducer: philosophersDataReducer,
    migrate: async (state) => {},
})

export const philosophersDataSlice = persistReducer(newPersistConfig, philosophersDataReducer)

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

// querySync()

export const persistor = persistStore(store)
