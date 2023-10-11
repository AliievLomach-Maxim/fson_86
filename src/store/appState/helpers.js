export const handlePending = (state) => {
	state.isLoading = true
}

export const handleRejected = (state, { error }) => {
	state.isLoading = false
	state.error = error.message
}

export const handleFulfilled = (state) => {
	state.isLoading = false
}
