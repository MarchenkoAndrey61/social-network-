import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga';
import { watchFetchPost, reducer } from "../Saga/Saga";
import { rootReducer } from './posts/reducers'


const sagaMiddleware = createSagaMiddleware()
export const store = createStore(reducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(watchFetchPost);