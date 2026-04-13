import { getPersistConfig } from 'redux-deep-persist'
import { persistReducer } from 'redux-persist'
import DBstorage from 'redux-persist-indexeddb-storage'
import philosophersDataReducer from '../../components/organisms/home/home-page/homePageRedux/homePageRedux'
import { getPhilosopherObjectIndex, getPhilosopherQuotes } from '../static/utils/utils'
import { PHILOSOPHER_TO_PURGE } from './purgeCache'

const BUILD_VERSION = process.env?.REACT_APP_COMMIT_HASH;

const newPersistConfig = getPersistConfig({
    key: 'root',
    storage: DBstorage('myDB'),
    blacklist: ['currentData', 'originalData', 'logs'],
    rootReducer: philosophersDataReducer,
    migrate: async (state) => {
        if (!state) return state;
        const storedVersion = state._version;
        // First install
        if (!storedVersion) {
            return {
                ...state,
                _version: BUILD_VERSION,
            };
        }
        
            // 🔥 New production deploy detected
        if (storedVersion !== BUILD_VERSION) {

            const newState = { ...state };

            // ✅ delete top-level keys
            delete newState.originalOptions;
            delete newState.options;

            // ✅ update version
            newState._version = BUILD_VERSION;

            return newState;
        }
        return state
    },
})

const philosophersDataSlice = persistReducer(newPersistConfig, philosophersDataReducer)

export default philosophersDataSlice
