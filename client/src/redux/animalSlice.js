import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import animalAPI from '../api/animalAPI'

export const getAnimalList = createAsyncThunk(
	'animals/getAnimalList',
	async (data, thunkAPI) => {
		try {
			const response = await animalAPI.getAnimalList()
			return response.data.content
		} catch (err) {
			return thunkAPI.rejectWithValue(err)
		}
	}
)

const animal = createSlice({
	name: 'animals',
	initialState: {
		animalList: [],
	},
	reducers: {},
	extraReducers: {
		[getAnimalList.fulfilled]: (state, action) => {
			state.animalList = action.payload
		},
	},
})

const { reducer } = animal

export default reducer
