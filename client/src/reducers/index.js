import { combineReducers } from "redux";
import todoReducer from "./fetch_todo";

const reducer = combineReducers({
  todoslist: todoReducer,
});

export default reducer;
