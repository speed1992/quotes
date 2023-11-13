import { configureStore } from '@reduxjs/toolkit'
import { persistStore } from 'redux-persist'
// import modalReducer from '../components/modal/modalRedux'
import snackbarReducer from '../components/snackbar/snackbarRedux'
import philosophersDataPersistedReducer from './philosopherDataStoreConfig'

export const store = configureStore({
    reducer: {
        philosophersData: philosophersDataPersistedReducer,
        snackbar: snackbarReducer,
        // modal: modalReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
    devTools: process.env.NODE_ENV !== 'production',
})

export const persistor = persistStore(store)
