import { getPersistConfig } from 'redux-deep-persist'
import { persistReducer } from 'redux-persist'
import DBstorage from 'redux-persist-indexeddb-storage'
import philosophersDataReducer from '../../components/organisms/home/home-page/homePageRedux/homePageRedux'
import { getPhilosopherObjectIndex, getPhilosopherQuotes } from '../static/utils/utils'
import { PHILOSOPHER_TO_PURGE } from './purgeCache'

const newPersistConfig = getPersistConfig({
    key: 'root',
    storage: DBstorage('myDB'),
    blacklist: ['currentData', 'originalData', 'logs'],
    rootReducer: philosophersDataReducer,
    migrate: async (state) => {
        if (state && getPhilosopherQuotes({ philosopher: PHILOSOPHER_TO_PURGE, options: state?.options })) {
            const index = getPhilosopherObjectIndex(PHILOSOPHER_TO_PURGE, state.options)
            if (state.options[index]?.quotes?.[0]?.id === undefined) {
                state.markedQuotes[PHILOSOPHER_TO_PURGE] = []
                state.currentData = []
                delete state.originalData
                delete state.options[index]?.quotes
                delete state.markedQuotes[PHILOSOPHER_TO_PURGE]
                if (state.currentPhilosopher === PHILOSOPHER_TO_PURGE) {
                    state.currentPhilosopher = 'NIETZSCHE'
                }
            }
        }
        return state
    },
})

const philosophersDataSlice = persistReducer(newPersistConfig, philosophersDataReducer)

export default philosophersDataSlice
