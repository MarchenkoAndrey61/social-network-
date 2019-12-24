import { createStore } from 'redux'
import { rootReducer, initialState } from '../Reducers/index'

export const store = createStore(rootReducer, initialState)