import { createStore, applyMiddleware } from 'redux'
import { logger } from 'redux-logger'

import { mainPageReducer, rootReducer } from './reducers'
import { addPost } from './actions'
import thunk from 'redux-thunk'

export const store = createStore(rootReducer, applyMiddleware(thunk, logger))