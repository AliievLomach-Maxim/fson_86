import { createAsyncThunk } from '@reduxjs/toolkit'
import { refresh, signIn, signUp } from '../../api/auth'

export const registrationThunk = createAsyncThunk(
	'auth/registration',
	async (body, { rejectWithValue }) => {
		try {
			const data = await signUp(body)
			return data
		} catch (error) {
			return rejectWithValue(error.response.data)
		}
	}
)

export const refreshThunk = createAsyncThunk(
	'auth/refresh',
	async (_, { rejectWithValue }) => {
		try {
			const data = await refresh()
			return data
		} catch (error) {
			return rejectWithValue(error.response.data)
		}
	}
)

export const loginThunk = createAsyncThunk(
	'auth/login',
	async (body, { rejectWithValue }) => {
		try {
			const data = await signIn(body)
			return data
		} catch (error) {
			return rejectWithValue(error.response.data)
		}
	}
)
