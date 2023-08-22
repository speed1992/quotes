import reduxQuerySync from 'redux-query-sync'
import INITIAL_STATE from '../../components/organisms/home/home-page/homePageRedux/initialState'
import { store } from '../redux/store'

export function querySync() {
    reduxQuerySync({
        store, // your Redux store
        params: {
            currentPhilosopher: {
                // The selector you use to get the destination string from the state object.
                selector: (state) => {
                    return state?.philosophersData?.currentPhilosopher
                },
                // The action creator you use for setting a new destination.
                action: (value) => ({ type: 'philosophersData/setCurrentPhilosopherRedux', payload: value }),
            },
            scrollPosition: {
                selector: (state) => state.philosophersData.scrollPosition,
                action: (value) => ({ type: 'philosophersData/setScrollPositionRedux', payload: value }),
            },
        },
        // Initially set the store's state to the current location.
        initialTruth: 'location',
        defaultState: INITIAL_STATE,
    })
}
