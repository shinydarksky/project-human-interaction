import { createSlice } from '@reduxjs/toolkit'

const initState = {
    user:{
        username:'',
        password:''
    },
    isAuth:false,
    loading:false,
}

const auth = createSlice({
    name:'auth',
    initialState:initState,
    reducers:{
        signInUser:(state,action)=>{
            localStorage.setItem('accessToken',JSON.stringify(action.payload))
            return {...state,isAuth:true,loading:true}
        },
        setLogout:(state,action)=>{
            localStorage.removeItem('accessToken')
            return initState
        }
    }
})




const {reducer,actions} = auth

export const {signInUser, setLogout} = actions

export default reducer
