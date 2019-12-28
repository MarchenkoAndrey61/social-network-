import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga';
import { watchFetchPost } from "../Saga/Saga";
import { mainPageReducer, rootReducer } from './reducers'
import { reducer } from '../../Saga/Saga';


const sagaMiddleware = createSagaMiddleware()
export const store = createStore(reducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(watchFetchPost);