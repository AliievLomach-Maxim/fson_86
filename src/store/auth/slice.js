import { createSlice } from '@reduxjs/toolkit'
import {
	loginThunk,
	refreshThunk,
	registrationThunk,
	updateProfileThunk,
} from './thunks'

const initialState = {
	token: '',
	profile: null,
}

const handleAuthFulfilled = (state, { payload }) => {
	state.token = payload.token
	state.profile = payload.user
}

const handleUpdateProfileFulfilled = (state, { payload }) => {
	state.profile = payload
}
const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		logOut: (state) => {
			state.profile = null
			state.token = ''
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(registrationThunk.fulfilled, handleAuthFulfilled)
			.addCase(loginThunk.fulfilled, handleAuthFulfilled)
			.addCase(refreshThunk.fulfilled, handleAuthFulfilled)
			.addCase(updateProfileThunk.fulfilled, handleUpdateProfileFulfilled)
	},
})

export const authReducer = authSlice.reducer
export const { logOut } = authSlice.actions
