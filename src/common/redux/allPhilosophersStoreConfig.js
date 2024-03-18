import { getPersistConfig } from 'redux-deep-persist'
import { persistReducer } from 'redux-persist'
import DBstorage from 'redux-persist-indexeddb-storage'
import allPhilosophersReducer from '../components/all-philosophers/allPhilosophersRedux'

const newPersistConfig = getPersistConfig({
    key: 'root2',
    storage: DBstorage('allPhilosophersDataDB'),
    rootReducer: allPhilosophersReducer,
})

const allPhilosophersReducerSlice = persistReducer(newPersistConfig, allPhilosophersReducer)

export default allPhilosophersReducerSlice
