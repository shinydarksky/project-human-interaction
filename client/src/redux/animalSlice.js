import { createSlice} from '@reduxjs/toolkit'

const animal = createSlice({
    name:'animals',
    initialState:[],
    reducers:{
        setAnimal:(state,action)=>{
            state = action.payload
            return state
        }
    }
})

const {reducer,actions} = animal

export const {setAnimal} = actions

export default reducer
