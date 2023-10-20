import { createSlice } from '@reduxjs/toolkit'

export const snackbarSlice = createSlice({
    name: 'snackbar',
    initialState: { message: '' },
    reducers: {
        setSnackabrMessage: (state, { payload }) => {
            state.message = payload
        },
    },
})

export default snackbarSlice.reducer

export const { setSnackabrMessage } = snackbarSlice.actions
