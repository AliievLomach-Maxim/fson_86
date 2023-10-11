export const handleFulfilledAll = (state, { payload }) => {
	state.products = payload.products
}

export const handleFulfilledSingle = (state, { payload }) => {
	state.singleProduct = payload
}
