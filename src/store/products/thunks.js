import { createAsyncThunk } from '@reduxjs/toolkit'
import {
	getProducts,
	getSingleProduct,
	removeProduct,
} from '../../api/products'

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
