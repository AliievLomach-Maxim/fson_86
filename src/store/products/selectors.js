import { createSelector } from '@reduxjs/toolkit'

export const selector = (state) => {
	return state.products
}
export const selectorProducts = (state) => {
	return state.products.products
}

export const selectorFilter = (state) => {
	return state.products.filter
}

export const selectorFilteredProducts = createSelector(
	[selectorProducts, selectorFilter],
	(products, filter) =>
		products
			? products.filter((product) =>
					product.title.toLowerCase().includes(filter.toLowerCase())
			  )
			: products
)
