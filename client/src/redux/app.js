import { configureStore } from "@reduxjs/toolkit";
import animalReducers from './animalSlice'
const rootReducers = {
    animals:animalReducers
}

const store = configureStore({
    reducer:rootReducers
})

export default store