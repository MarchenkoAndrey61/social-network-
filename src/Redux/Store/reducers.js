import { combineReducers, applyMiddleware } from "redux";
import { logReducer } from "./login/reducers";
import { regReducer } from "./registration /reducers";
import { reducer } from "../Saga/Saga";


export default combineReducers({
  login:logReducer,
  registration: regReducer,
  posts: reducer
});



