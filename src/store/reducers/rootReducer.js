import { combineReducers } from "redux";
import createReducer from "./create";
import quizReducer from "./quizReducers";
import authReducers from "./authReducer";

export default combineReducers({
    quiz: quizReducer,
    create: createReducer,
    auth: authReducers
})