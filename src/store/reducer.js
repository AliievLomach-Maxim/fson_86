import { combineReducers } from 'redux'
// import { reducerTodo } from './todo/reducer'
import { todoReducer } from './todo/slice'

import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

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

const persistedReducer = persistReducer(persistConfig, todoReducer)

const otherReducers = combineReducers({
	users: todoReducer,
	items: todoReducer,
	password: todoReducer,
})
const persistedReducer2 = persistReducer(persistConfig2, otherReducers)

export const reducer = {
	todo: persistedReducer,
	other: persistedReducer2,
}
