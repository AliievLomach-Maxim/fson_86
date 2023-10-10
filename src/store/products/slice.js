import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
	getProducts,
	getSingleProduct,
	removeProduct,
} from '../../api/products'

const initialState = {
	products: null,
	error: '',
	isLoading: false,
	singleProduct: null,
}

// export const getAllProducts = () => async (dispatch) => {
// 	try {
// 		dispatch(productsSlice.actions.pending())
// 		const data = await getProducts()
// 		dispatch(productsSlice.actions.fulfilled(data))
// 	} catch (error) {
// 		dispatch(productsSlice.actions.rejected(error))
// 	}
// }

// with error message from API
// export const getAllProducts = createAsyncThunk(
// 	'products/getAllProducts',
// 	async (_, { rejectWithValue }) => {
// 		try {
// 			const data = await getProducts()
// 			return data
// 		} catch (error) {
// 			return rejectWithValue(error.response.data)
// 		}
// 	}
// )

export const getAllProducts = createAsyncThunk('products/getAllProducts', () =>
	getProducts()
)

export const getProduct = createAsyncThunk(
	'products/getProduct',
	async (id) => {
		return await getSingleProduct(id)
	}
)

export const deleteProduct = createAsyncThunk(
	'products/deleteProduct',
	async () => {
		return await removeProduct()
	}
)

const handlePending = (state) => {
	state.isLoading = true
}

const handleRejected = (state, { payload, error }) => {
	state.isLoading = false
	console.log('payload :>> ', payload)
	console.log('error :>> ', error.message)
	state.error = error.message

	// with rejectWithValue
	// state.error = payload
}

const handleFulfilled = (state) => {
	state.isLoading = false
}

const handleFulfilledAll = (state, { payload }) => {
	state.products = payload
}

const handleFulfilledSingle = (state, { payload }) => {
	state.singleProduct = payload
}

const productsSlice = createSlice({
	name: 'products',
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(getAllProducts.fulfilled, handleFulfilledAll)
			.addCase(getProduct.fulfilled, handleFulfilledSingle)
			.addMatcher((action) => action.type.endsWith('/pending'), handlePending)
			.addMatcher((action) => action.type.endsWith('/rejected'), handleRejected)
			.addMatcher(
				(action) => action.type.endsWith('/fulfilled'),
				handleFulfilled
			)
	},
})
// const productsSlice = createSlice({
// 	name: 'products',
// 	initialState,
// 	extraReducers: (builder) => {
// 		builder
// 			// .addCase(getAllProducts.pending, handlePending)
// 			.addCase(getAllProducts.fulfilled, (state, { payload }) => {
// 				state.isLoading = false
// 				state.products = payload
// 			})
// 			// .addCase(getAllProducts.rejected, handleRejected)
// 			// .addCase(getProduct.pending, handlePending)
// 			.addCase(getProduct.fulfilled, (state, { payload }) => {
// 				state.isLoading = false
// 				state.singleProduct = payload
// 			})
// 			// .addCase(getProduct.rejected, handleRejected)
// 			.addMatcher((action) => action.type.endsWith('/pending'), handlePending)
// 			.addMatcher((action) => action.type.endsWith('/rejected'), handleRejected)
// 	},
// 	// extraReducers: {
// 	// 	[getAllProducts.pending]: (state) => {
// 	// 		state.isLoading = true
// 	// 	},
// 	// 	[getAllProducts.fulfilled]: (state, { payload }) => {
// 	// 		state.isLoading = false
// 	// 		state.products = payload
// 	// 	},
// 	// 	[getAllProducts.rejected]: (state, { payload }) => {
// 	// 		state.isLoading = false
// 	// 		state.error = payload.message
// 	// 	},
// 	// },
// 	// reducers: {
// 	// 	pending: (state) => {
// 	// 		state.isLoading = true
// 	// 	},
// 	// 	fulfilled: (state, { payload }) => {
// 	// 		state.isLoading = false
// 	// 		state.products = payload
// 	// 	},
// 	// 	rejected: (state, { payload }) => {
// 	// 		state.isLoading = false
// 	// 		state.error = payload.message
// 	// 	},
// 	// },
// })

export const productsReducer = productsSlice.reducer
