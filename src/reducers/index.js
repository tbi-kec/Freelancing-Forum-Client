import { combineReducers } from "redux";
import authReducer from "./auth";
import alertReducer from "./alert";
import projectReducer from "./projectReducer.";
import currentUserReducer from "./currentUserReducer";
import userReducer from "./user";
import myDetailsReducer from "./myDetails";
import constantReducer from "./constant";
export default combineReducers({
        authReducer,
        alertReducer,
        projectReducer,
        currentUserReducer,
        userReducer,
        constantReducer,
        myDetailsReducer
});