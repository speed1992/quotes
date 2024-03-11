import { createSlice } from '@reduxjs/toolkit'

export const allPhilosohersSlice = createSlice({
    name: 'all',
    initialState: { isAllFeatureOn: false },
    reducers: {
        toggleFeature: (state) => {
            state.isAllFeatureOn = !state.isAllFeatureOn
        },
    },
})

export default allPhilosohersSlice.reducer

export const { toggleFeature } = allPhilosohersSlice.actions
