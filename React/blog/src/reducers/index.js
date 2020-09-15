// reducers return anything besides undefined
import {combineReducers} from "redux";
import postReducers from "./postReducers";
import usersReducer from "./usersReducer";
export default combineReducers({
    posts:postReducers,
    users:usersReducer
})