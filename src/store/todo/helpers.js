import { nanoid } from '@reduxjs/toolkit'

export const createObjectTodo = (data) => {
	return {
		payload: {
			...data,
			id: nanoid(),
			completed: false,
		},
	}
}
