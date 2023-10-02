import { createStore } from 'redux'
import { reducer } from './reducer'

export const store = createStore(reducer)

// store.dispatch({ type: 'updateNumber', payload: 10 })
// console.log('store :>> ', store.getState())
// store.dispatch({ type: 'updateUsers', payload: ['alex'] })
// console.log('store :>> ', store.getState())
// store.dispatch({ type: 'updateItems', payload: { name: 'alex' } })
// console.log('store :>> ', store.getState())

// store.dispatch({ type: 'updateUsers', payload: ['Bob'] })
// console.log('store :>> ', store.getState())

// const [first, setfirst] = useState()
