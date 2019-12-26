import { ADD_POST } from './actions'

const initialState = [{ 
    id: 1, 
    title: 'First post', 
    discription: 'about world', 
    comments: '',
  }]

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_POST:
      return [ ...state,{
        id: state[state.length -1].id + 1,
        title: action.payload_1,
        discription: action.payload_2,
        comments: []
      }]

    default:
      return state
  }
}