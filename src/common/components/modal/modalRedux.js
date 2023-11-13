import { createSlice } from '@reduxjs/toolkit'

export const modalSlice = createSlice({
    name: 'modal',
    initialState: {  
        currentModalName: '', 
    },
    reducers: {
        setCurrentModalName: (state, { payload }) => {
            state.currentModalName = payload
        },
    },
})

export default modalSlice.reducer

export const { setCurrentModalName } = modalSlice.actions
