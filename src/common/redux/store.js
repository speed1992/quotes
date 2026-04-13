import { configureStore } from '@reduxjs/toolkit'
import { persistStore } from 'redux-persist'
import generateQuoteImageReducer from '../../components/organisms/analysis/generate-quote-image/generateQuoteImageRedux'
import modalReducer from '../components/modal/modalRedux'
import snackbarReducer from '../components/snackbar/snackbarRedux'
import philosophersDataPersistedReducer from './philosopherDataStoreConfig'
import { checkQueryParams } from '../utils/urlUtils'

export const store = configureStore({
    reducer: {
        philosophersData: philosophersDataPersistedReducer,
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

if (
    process.env.NODE_ENV === 'development' ||
    checkQueryParams('dev')
) {
    window.redux = {
        store,
        persistor,
        getState: () => store.getState(),
        dispatch: store.dispatch,
    }
}
