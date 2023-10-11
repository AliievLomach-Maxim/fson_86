import { createSlice } from '@reduxjs/toolkit'
import { getAllProducts, getProduct } from './thunks'
import { initialState } from './initialState'
import { handleFulfilledAll, handleFulfilledSingle } from './helpers'

const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		setFilterAction: (state, { payload }) => {
			state.filter = payload
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getAllProducts.fulfilled, handleFulfilledAll)
			.addCase(getProduct.fulfilled, handleFulfilledSingle)
	},
})

export const productsReducer = productsSlice.reducer
export const { setFilterAction } = productsSlice.actions
