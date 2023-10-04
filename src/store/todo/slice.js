import { createSlice } from '@reduxjs/toolkit'
import { initialState } from './initialState'
import { createObjectTodo } from './helpers'

export const todoSlice = createSlice({
	name: 'todo',
	initialState,
	reducers: {
		createTodoAction: {
			prepare: createObjectTodo,
			reducer: (state, { payload }) => {
				state.todo ? state.todo.push(payload) : (state.todo = [payload])
			},
		},
		deleteTodo: (state, { payload }) => {
			state.todo = state.todo.filter((el) => el.id !== payload)
		},
		updateTodo: (state, { payload }) => {
			state.todo = state.todo.map((el) =>
				el.id === payload ? { ...el, completed: !el.completed } : el
			)
			// state.todo = state.todo.map((el) => {
			// 	if (el.id === payload) {
			// 		return { ...el, completed: !el.completed }
			// 	} else return el
			// })
		},
	},
})

export const todoReducer = todoSlice.reducer
export const { createTodoAction, deleteTodo, updateTodo } = todoSlice.actions

// export const todoSlice = createSlice({
// 	name: 'todo',
// 	initialState,
// 	reducers: {
// 		createTodoAction: {
// 			prepare: createObjectTodo,
// 			reducer: (state, { payload }) => {
// 				state.todo ? state.todo.push(payload) : (state.todo = [payload])
// 			},
// 		},
// 		// createTodoAction: {
// 		// 	prepare: (data) => {
// 		// 		return {
// 		// 			payload: {
// 		// 				...data,
// 		// 				id: nanoid(),
// 		// 				completed: false,
// 		// 			},
// 		// 		}
// 		// 	},
// 		// 	reducer: (state, { payload }) => {
// 		// 		state.todo ? state.todo.push(payload) : (state.todo = [payload])
// 		// 	},
// 		// },
// 		// createTodoAction: (state, { type, payload }) => {
// 		// 	state.todo
// 		// 		? state.todo.push({
// 		// 				...payload,
// 		// 				id: nanoid(),
// 		// 				completed: false,
// 		// 		  })
// 		// 		: (state.todo = [
// 		// 				{
// 		// 					...payload,
// 		// 					id: nanoid(),
// 		// 					completed: false,
// 		// 				},
// 		// 		  ])
// 		// },
// 	},
// })
