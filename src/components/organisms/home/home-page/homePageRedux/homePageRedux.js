import { createSlice } from '@reduxjs/toolkit'
import INITIAL_STATE from './initialState'

export const philosophersDataSlice = createSlice({
    name: 'philosophersData',
    initialState: JSON.parse(JSON.stringify(INITIAL_STATE)),
    reducers: {
        setCurrentPhilosopherRedux: (state, { payload }) => {
            state.currentPhilosopher = payload
        },
        setStartRedux: (state, { payload }) => {
            state.start = payload
        },
        setEndRedux: (state, { payload }) => {
            state.end = payload
        },
        setSearchTextRedux: (state, { payload }) => {
            state.searchText = payload
        },
        setMarkedModeRedux: (state, { payload }) => {
            state.markedMode = payload
        },
        setCurrentDataRedux: (state, { payload }) => {
            if (Array.isArray(payload)) state.currentData = payload
        },
        setOptionsRedux: (state, { payload }) => {
            state.options = payload
        },
        setOriginalOptionsRedux: (state, { payload }) => {
            state.originalOptions = payload
        },
        setMarkedQuotesRedux: (state, { payload }) => {
            state.markedQuotes = payload
        },
        setDarkModeRedux: (state, { payload }) => {
            state.darkMode = payload
        },
        setVoiceSpeedRedux: (state, { payload }) => {
            state.voiceSpeed = payload
        },
        setScrollPositionRedux: (state, { payload }) => {
            if (payload !== undefined && payload !== 'undefined') {
                const obj = {}
                obj[state.currentPhilosopher] = parseInt(payload)
                state.scrollPosition = { ...state.scrollPosition, ...obj }
            }
        },
        setSortingRedux: (state, { payload }) => {
            state.sorting = payload
        },
        setScheduledPostsRedux: (state, { payload }) => {
            state.scheduledPosts = payload
        },
        setUserNameRedux: (state, { payload }) => {
            state.userName = payload
        },
        setIsLoggedInRedux: (state, { payload }) => {
            state.isLoggedIn = payload
        },
        setPasswordRedux: (state, { payload }) => {
            state.password = payload
        },
        setSyncDateRedux: (state, { payload }) => {
            state.syncDate = payload
        },
        setRestoreQuotesFromServerCachedDateRedux: (state, { payload }) => {
            state.restoreQuotesFromServerCachedDate = payload
        },
        setVoiceTypeRedux: (state, { payload }) => {
            state.voiceType = payload
        },
        setRecentPhilosophersRedux: (state, { payload }) => {
            state.recentPhilosophers = payload
        },
        setMinModeRedux: (state, { payload }) => {
            state.minMode = payload
        },
        setLogsRedux: (state, { payload }) => {
            state.logs = [...state.logs, payload]
        },
    },
})

export default philosophersDataSlice.reducer

export const { setCurrentPhilosopherRedux, setStartRedux, setEndRedux, setSearchTextRedux, setMarkedModeRedux, setCurrentDataRedux, setOptionsRedux, setDarkModeRedux, setMarkedQuotesRedux, setVoiceSpeedRedux, setScrollPositionRedux, setSortingRedux, setScheduledPostsRedux, setOriginalOptionsRedux, setUserNameRedux, setIsLoggedInRedux, setPasswordRedux, setSyncDateRedux, setRestoreQuotesFromServerCachedDateRedux, setVoiceTypeRedux, setRecentPhilosophersRedux, setMinModeRedux, setLogsRedux } = philosophersDataSlice.actions
