import { ADD_POST } from './actions'
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

const initialState = [{ 
  id: 1, 
  user_id: '',
  title: 'Wow!!', 
  description: 'This is my first post!', 
  created_at:'',
  updated_at:''
}]


export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_POST:
      return [ ...state,{
        id: state[state.length -1].id + 1,
        title: action.payload_1,
        description: action.payload_2,
      }]

    default:
      return state
  }
}