import { createSlice } from '@reduxjs/toolkit'
import INITIAL_STATE from './initialState'

export const philosophersDataSlice = createSlice({
    name: 'philosophersData',
    initialState: JSON.parse(JSON.stringify(INITIAL_STATE)),
    reducers: {
        setQuotesLoadedRedux: (state, { payload }) => {
            state.quotesLoaded = payload
        },
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
            state.scrollPosition = payload
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
    },
})

export default philosophersDataSlice.reducer

export const { setCurrentPhilosopherRedux, setStartRedux, setEndRedux, setSearchTextRedux, setMarkedModeRedux, setCurrentDataRedux, setOptionsRedux, setDarkModeRedux, setQuotesLoadedRedux, setMarkedQuotesRedux, setVoiceSpeedRedux, setScrollPositionRedux, setSortingRedux, setScheduledPostsRedux, setOriginalOptionsRedux, setUserNameRedux } = philosophersDataSlice.actions
