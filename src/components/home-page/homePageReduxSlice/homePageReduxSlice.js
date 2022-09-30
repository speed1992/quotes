import { createSlice } from '@reduxjs/toolkit'

export const philosophersDataSlice = createSlice({
    name: 'philosophersData',
    initialState: {
        currentPhilosopher: "NIETZSCHE",
        start: 1,
        end: "",
        searchText: "",
        markedMode: false,
        currentData: {},
        originalData: {}
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
        setOriginalDataRedux: (state, { payload }) => {
            state.originalData = payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, setCurrentPhilosopherRedux, setStartRedux, setEndRedux, setSearchTextRedux, setMarkedModeRedux, setCurrentDataRedux, setOriginalDataRedux } = philosophersDataSlice.actions

export default philosophersDataSlice.reducer