import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initState = {
    user:{
        username:'',
        password:''
    },
    isAuth:false,
    loading:false,
}

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

export const signInUser = createAsyncThunk(
	'auth/signInUser',
	async (data, thunkAPI) => {
        const { isRemember } = data
		try{
            await sleep(500)
            if(isRemember){
                localStorage.setItem('accessToken',JSON.stringify(data))
            }
            else
                sessionStorage.setItem('accessToken',JSON.stringify(data))

            return data
        }
        catch(err){
            localStorage.removeItem('accessToken')
        }
        return 
	}
)

const auth = createSlice({
    name:'auth',
    initialState:initState,
    reducers:{
        // signInUser:(state,action)=>{
        //     localStorage.setItem('accessToken',JSON.stringify(action.payload))
        //     return {...state,isAuth:false,loading:true}
        // },
        setLogout:(state,action)=>{
            localStorage.removeItem('accessToken')
            sessionStorage.removeItem('accessToken')
            return initState
        },
        loadLogin:(state,action)=>{
            const acccessToken = localStorage.getItem('accessToken') || sessionStorage.getItem('accessToken')
            if(acccessToken !=null){
                return {...state,isAuth:true,loading:true}
            }
        },
    },
    extraReducers:{
        [signInUser.pending]:state=>{
            state.loading = true
        },
        [signInUser.fulfilled]: (state, action) => {
            state.isAuth = true
			state.loading = false
            state.user = state.payload
		},
		[signInUser.rejected]: (state, action) => {
            state.loading = false
            state.isAuth = false
		},
    }
})




const {reducer,actions} = auth

export const {setLogout, loadLogin} = actions

export default reducer
