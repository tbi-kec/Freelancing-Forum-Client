import { combineReducers } from "redux";
import authReducer from "./auth";
import alertReducer from "./alert";
import projectReducer from "./projectReducer.";
import currentUserReducer from "./currentUserReducer";
export default combineReducers({
        authReducer,
        alertReducer,
        projectReducer,
        currentUserReducer
});