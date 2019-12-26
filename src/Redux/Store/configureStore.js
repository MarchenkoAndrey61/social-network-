import { createStore, applyMiddleware } from 'redux'
import { logger } from 'redux-logger'
import { rootReducer } from './posts/reducers'
import thunk from 'redux-thunk'

export const store = createStore(rootReducer, applyMiddleware(thunk, logger))