import { nanoid } from 'nanoid'
import { initialState } from './initialState'
import { CREATE_TODO } from './types'

export const reducerTodo = (state = initialState, { type, payload }) => {
	switch (type) {
		case CREATE_TODO:
			return {
				...state,
				todo: state.todo
					? [
							...state.todo,
							{
								...payload,
								id: nanoid(),
								completed: false,
							},
					  ]
					: [
							{
								...payload,
								id: nanoid(),
								completed: false,
							},
					  ],
			}

		default:
			return state
	}
}
