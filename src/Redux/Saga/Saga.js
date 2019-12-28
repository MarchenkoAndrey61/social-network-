import { call, put, takeEvery } from 'redux-saga/effects'
import { addPost } from "../Store/posts/actions";
//import { rootReducer }  from ;
//import rootReducer from './Redux/Store/reducers';




export function reducer(state = {
  title: '',
  description: '',
}, action) {
  console.log('action',action)
    switch (action.type) {
      case 'REQUESTED_POST':
        return {
          url: '',
          loading: true,
          error: false,
        };
      case 'REQUESTED_POST_SUCCEEDED':
        return action.data
      case 'REQUESTED_POST_FAILED':
        return { 
          url: '',
          loading: false,
          error: true,
        };
      default:
        return state;
    }
};





// Action Creators
const requestPost = () => {
    return { type: 'REQUESTED_POST' }
};

const requestPostSuccess = (data) => {
    return { type: 'REQUESTED_POST_SUCCEEDED', data }
};

const requestPostError = () => {
    return { type: 'REQUESTED_POST_FAILED' }
};

let i

const fetchPost = () => {
    return { type: 'FETCHED_POST' }
};

  // Sagas
export function* watchFetchPost() {
    yield takeEvery('FETCHED_POST', fetchPostAsync);
  }



  function* fetchPostAsync() {
    try {
      const data = yield call(() => {
        return fetch('https://postify-api.herokuapp.com/posts', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Token': localStorage.getItem('Access-Token'),
                        'Client': localStorage.getItem('Client'),
                        'Uid': localStorage.getItem('Uid'),
                    }})
                .then(res => res.json())
                .then(data => {
                  return data
                    console.log(i)
                })
        } 
      );
      console.log('DATA', data)
      yield put(requestPostSuccess(data));
    } catch (error) {
      yield put(requestPostError());
    }
  }