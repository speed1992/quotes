import { configureStore } from '@reduxjs/toolkit'
import { getPersistConfig } from 'redux-deep-persist'
import { persistReducer, persistStore } from 'redux-persist'
import DBstorage from 'redux-persist-indexeddb-storage'
import getStoredState from 'redux-persist/es/getStoredState'
import storage from 'redux-persist/lib/storage'
import philosophersDataReducer from '../../components/organisms/home/home-page/homePageRedux/homePageRedux'
import { getPhilosopherObjectIndex, getPhilosopherQuotes } from '../static/utils/utils'
import { PHILOSOPHER_TO_PURGE } from './purgeCache'

const persistConfig = getPersistConfig({
    key: 'root',
    storage,
    blacklist: ['currentData', 'originalData', 'options', 'quotesLoaded'],
    rootReducer: philosophersDataReducer,
})

const newPersistConfig = getPersistConfig({
    key: 'root',
    storage: DBstorage('myDB'),
    blacklist: ['currentData', 'originalData', 'quotesLoaded'],
    rootReducer: philosophersDataReducer,
    migrate: async (state) => {
        if (state === undefined) {
            const asyncState = await getStoredState(persistConfig)
            return asyncState
        } else {
            PHILOSOPHER_TO_PURGE.forEach((element) => {
                if (getPhilosopherQuotes({ philosopher: element, options: state?.options })) {
                    const index = getPhilosopherObjectIndex(element, state.options)
                    delete state.options[index]?.quotes
                    // delete state.markedQuotes[element]
                    if (state.currentPhilosopher === element) {
                        state.currentPhilosopher = 'NIETZSCHE'
                    }
                }
            })

            return state
        }
    },
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

export const persistor = persistStore(store)
