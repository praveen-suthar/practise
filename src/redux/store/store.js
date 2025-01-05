import { configureStore } from "@reduxjs/toolkit";
// import apiSlices from '../slices/apiSlice'
import apiReducer from '../slices/apiSlice'

const store = configureStore({
    reducer:{
        api:apiReducer
        // apiReducer // we can use alternative
    }
})

export default store; 