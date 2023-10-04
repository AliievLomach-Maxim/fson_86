import { createAction } from '@reduxjs/toolkit'

// export const createTodo = (value) => ({ type: CREATE_TODO, payload: value })
// export const deleteTodo = (value) => ({ type: DELETE_TODO, payload: value })

export const createTodoAction = createAction('todo/add_todo')
