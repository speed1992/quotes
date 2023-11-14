import { createSlice } from '@reduxjs/toolkit'

export const GenerateQuoteImageSlice = createSlice({
    name: 'modal',
    initialState: {},
    reducers: {
        setQuoteImageData: (state, { payload }) => {
            return payload
        },
    },
})

export default GenerateQuoteImageSlice.reducer

export const { setQuoteImageData } = GenerateQuoteImageSlice.actions
