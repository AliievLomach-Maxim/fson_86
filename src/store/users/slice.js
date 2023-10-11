import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getUsers } from '../../api/users'
import { handleFulfilledAll } from './helpers'

const initialState = {
	users: null,
}

export const getUsersThunk = createAsyncThunk('users/getUsers', () =>
	getUsers()
)

const usersSlice = createSlice({
	name: 'users',
	initialState,
	extraReducers: (builder) => {
		builder.addCase(getUsersThunk.fulfilled, handleFulfilledAll)
	},
})

export const userReducer = usersSlice.reducer
