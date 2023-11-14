import { createSlice } from '@reduxjs/toolkit'

export const modalSlice = createSlice({
    name: 'modal',
    initialState: '',
    reducers: {
        setCurrentModalName: (state, { payload }) => payload,
    },
})

export default modalSlice.reducer

export const { setCurrentModalName } = modalSlice.actions
