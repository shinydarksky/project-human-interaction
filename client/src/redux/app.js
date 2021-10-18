import { configureStore } from "@reduxjs/toolkit";
import animalReducers from './animalSlice'
import authReducers from './authSlice'
const rootReducers = {
    animals:animalReducers,
    auth:authReducers,
}

const store = configureStore({
    reducer:rootReducers
})

export default store