import { combineReducers } from "redux";
import repos from "./reposReducer";
import issues from "./issuesReducer";

const rootReducer = combineReducers({ repos, issues });

export default rootReducer;
