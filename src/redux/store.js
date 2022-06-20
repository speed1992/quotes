import { configureStore } from '@reduxjs/toolkit'
import homeReducer from '../components/home-page/homePageReduxSlice/homePageReduxSlice'


export default configureStore({
    reducer: {
        home: homeReducer,
    },
})