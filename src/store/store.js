import { reducer } from './reducer'
import { configureStore } from '@reduxjs/toolkit'
import { persistStore } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'

// const persistConfig = {
// 	key: 'root',
// 	storage,
// }

// const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({ reducer })

export const persistor = persistStore(store)
