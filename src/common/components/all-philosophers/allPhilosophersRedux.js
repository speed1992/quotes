import { createSlice } from '@reduxjs/toolkit'

export const allPhilosohersSlice = createSlice({
    name: 'all',
    initialState: { isAllFeatureOn: false, isFetching: false },
    reducers: {
        toggleFeatureRedux: (state) => {
            state.isAllFeatureOn = !state.isAllFeatureOn
        },
        setAllDataRedux: (state, { payload }) => {
            state.currentData = payload
        },
        setIsFetchingRedux: (state, { payload }) => {
            state.isFetching = payload
        },
    },
})

export default allPhilosohersSlice.reducer

export const { toggleFeatureRedux, setAllDataRedux, setIsFetchingRedux } = allPhilosohersSlice.actions
