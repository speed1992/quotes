import { getPersistConfig } from 'redux-deep-persist'
import { persistReducer } from 'redux-persist'
import DBstorage from 'redux-persist-indexeddb-storage'
import philosophersDataReducer from '../../components/organisms/home/home-page/homePageRedux/homePageRedux'

const newPersistConfig = getPersistConfig({
    key: 'root',
    storage: DBstorage('myDB'),
    blacklist: ['currentData', 'originalData', 'logs'],
    rootReducer: philosophersDataReducer,
})

const philosophersDataSlice = persistReducer(newPersistConfig, philosophersDataReducer)

export default philosophersDataSlice
