import { combineReducers } from "redux";
import quizReducer from "./quizReducers";

export default combineReducers({
    quiz: quizReducer
})