import { combineReducers } from 'redux'
import { reducerTodo } from './todo/reducer'
import { addressReducer } from './address/reducer'

export const reducer = combineReducers({
	todo: reducerTodo,
	address: addressReducer,
})
