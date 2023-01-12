import { createSlice } from '@reduxjs/toolkit'
import OPTIONS from '../../../static/philosophers-data'

export const philosophersDataSlice = createSlice({
    name: 'philosophersData',
    initialState: {
        currentPhilosopher: 'NIETZSCHE',
        start: 1,
        end: '',
        searchText: '',
        markedMode: false,
        markedQuotes: {},
        currentData: {},
        translate: false,
        sorting: 'alphabetical',
        options: OPTIONS,
        quotesLoaded: false,
    },
    reducers: {
        increment: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
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
            state.currentData = payload
        },
        setOptionsRedux: (state, { payload }) => {
            state.options = payload
        },
        setTranslateRedux: (state, { payload }) => {
            state.translate = payload
        },
        setSortingRedux: (state, { payload }) => {
            state.sorting = payload
        },
        setMarkedQuotes: (state, { payload }) => {
            state.markedQuotes = payload
        },
    },
})

export const { increment, decrement, incrementByAmount, setCurrentPhilosopherRedux, setStartRedux, setEndRedux, setSearchTextRedux, setMarkedModeRedux, setCurrentDataRedux, setTranslateRedux, setSortingRedux, setOptionsRedux, setQuotesLoadedRedux, setMarkedQuotes } = philosophersDataSlice.actions

export default philosophersDataSlice.reducer
