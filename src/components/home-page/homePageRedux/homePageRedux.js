import { createSlice } from '@reduxjs/toolkit'
import { INITIAL_STATE } from './initialState'

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
        setOrginalDataRedux: (state, { payload }) => {
            if (Array.isArray(payload)) state.originalData = payload
        },
        setOptionsRedux: (state, { payload }) => {
            state.options = payload
        },
        setTranslateRedux: (state, { payload }) => {
            state.translate = payload
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
    },
})

export default philosophersDataSlice.reducer

export const { setCurrentPhilosopherRedux, setStartRedux, setEndRedux, setSearchTextRedux, setMarkedModeRedux, setCurrentDataRedux, setTranslateRedux, setOptionsRedux, setDarkModeRedux, setQuotesLoadedRedux, setMarkedQuotesRedux, setOrginalDataRedux, setVoiceSpeedRedux, setScrollPositionRedux } = philosophersDataSlice.actions
