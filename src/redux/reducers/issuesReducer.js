import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function issuesReducer(state = initialState.issues, action) {
  switch (action.type) {
    case types.LOAD_ISSUES_SUCCESS:
      return action.issues;
    case types.REORDER_ISSUES_SUCCESS:
      return action.issues;
    default:
      return state;
  }
}
