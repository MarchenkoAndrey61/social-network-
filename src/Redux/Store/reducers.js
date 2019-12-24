import { combineReducers } from "../../../../../Library/Caches/typescript/3.6/node_modules/redux";
import { logReducer } from "./login/reducers";
import { regReducer } from "./registration /reducers";

export default combineReducers({
  login:logReducer,
  registration: regReducer
});