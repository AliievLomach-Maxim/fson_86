import { reducer } from './reducer'
import { configureStore } from '@reduxjs/toolkit'
import { persistStore } from 'redux-persist'

export const store = configureStore({ reducer })

export const persistor = persistStore(store)
