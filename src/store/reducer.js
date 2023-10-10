import { combineReducers } from 'redux'
import { reducerTodo } from './todo/reducer'

import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import { productsReducer } from './products/slice'

const persistConfig = {
	key: 'root',
	storage,
	blacklist: ['password'],
	// whitelist:['todo']
}

const persistConfig2 = {
	key: 'other',
	storage,
}

const persistedReducer = persistReducer(persistConfig, reducerTodo)

const otherReducers = combineReducers({
	users: reducerTodo,
	items: reducerTodo,
	password: reducerTodo,
})
const persistedReducer2 = persistReducer(persistConfig2, otherReducers)

export const reducer = {
	todo: persistedReducer,
	other: persistedReducer2,
	products: productsReducer,
}
