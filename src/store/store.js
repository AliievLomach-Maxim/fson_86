
import { reducer } from './reducer'
import { configureStore } from '@reduxjs/toolkit'
import { persistStore } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'


// store.dispatch({ type: 'updateNumber', payload: 10 })
// console.log('store :>> ', store.getState())
// store.dispatch({ type: 'updateUsers', payload: ['alex'] })
// console.log('store :>> ', store.getState())
// store.dispatch({ type: 'updateItems', payload: { name: 'alex' } })
// console.log('store :>> ', store.getState())

// const customMiddleware = (state) => {
// 	return (next) => {
// 		return (action) => {
// 			if (typeof action === 'function') {
// 				action(state.dispatch)
// 				return
// 			}
// 			return next(action)
// 		}
// 	}
// }

export const store = configureStore({
	reducer,
	// middleware: [customMiddleware],
})

export const persistor = persistStore(store)
