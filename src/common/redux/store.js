import { configureStore } from '@reduxjs/toolkit'
import { persistStore } from 'redux-persist'
import generateQuoteImageReducer from '../../components/organisms/analysis/generate-quote-image/generateQuoteImageRedux'
import modalReducer from '../components/modal/modalRedux'
import snackbarReducer from '../components/snackbar/snackbarRedux'
import allPhilosophersPersistedReducer from './allPhilosophersStoreConfig'
import philosophersDataPersistedReducer from './philosopherDataStoreConfig'

export const store = configureStore({
    reducer: {
        philosophersData: philosophersDataPersistedReducer,
        all: allPhilosophersPersistedReducer,
        snackbar: snackbarReducer,
        modal: modalReducer,
        quoteImage: generateQuoteImageReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
    devTools: process.env.NODE_ENV !== 'production',
})

export const persistor = persistStore(store)
