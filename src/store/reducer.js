import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import { productsReducer } from './products/slice'
import { reducerTodo } from './todoWithReducers/reducer'
import { userReducer } from './users/slice'
import { appReducer } from './appState/slice'
import { authReducer } from './auth/slice'

const persistConfig = {
	key: 'auth',
	storage,
	whitelist: ['token'],
}

const authPersistedReducer = persistReducer(persistConfig, authReducer)

export const reducer = {
	todo: reducerTodo,
	products: productsReducer,
	users: userReducer,
	appState: appReducer,
	auth: authPersistedReducer,
}
