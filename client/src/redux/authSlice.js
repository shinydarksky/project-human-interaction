import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initState = {
    user:{
        username:'',
        password:''
    },
    isError:false,
    isAuth:false,
    loading:false,
}

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

export const signInUser = createAsyncThunk(
	'auth/signInUser',
	async (data, thunkAPI) => {
        const { isRemember,username,password } = data
        await sleep(1000)
		try{
            if(username === 'admin123' && password === 'admin123')
            {
                if(isRemember){
                    localStorage.setItem('accessToken',JSON.stringify(data))
                }
                else
                    sessionStorage.setItem('accessToken',JSON.stringify(data))

                return data
            }
            else{
                throw  Error()
            }
        }
        catch(err){
            localStorage.removeItem('accessToken')
            sessionStorage.removeItem('accessToken')
            return thunkAPI.rejectWithValue(err)
        }
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
                const {username,password} = JSON.parse(acccessToken)
                if(username === 'admin123' && password === 'admin123')
                {
                    return {...state,isAuth:true,loading:true}
                }
                else{
                    localStorage.removeItem('accessToken')
                    sessionStorage.removeItem('accessToken')
                    return initState
                }
            }
        },
    },
    extraReducers:{
        [signInUser.pending]:state=>{
            state.loading = true
            state.isError = false
        },
        [signInUser.fulfilled]: (state, action) => {
            state.isAuth = true
			state.loading = false
            state.isError = false
            state.user = state.payload
		},
		[signInUser.rejected]: (state, action) => {
            state.loading = false
            state.isAuth = false
            state.isError = true
		},
    }
})




const {reducer,actions} = auth

export const {setLogout, loadLogin} = actions

export default reducer
