import * as types from "./actionTypes";
import Axios from "axios";
import arrayMove from "array-move";

export function loadIssuesSuccess(issues) {
  return {
    type: types.LOAD_ISSUES_SUCCESS,
    issues: issues
  };
}

export function reorderIssuesSuccess(issues) {
  return {
    type: types.REORDER_ISSUES_SUCCESS,
    issues: issues
  };
}

export function loadIssues(url) {
  return function(dispatch) {
    return Axios.get(`${url}/issues`)
      .then(({ data }) => {
        console.log("issues", data);
        dispatch(loadIssuesSuccess(data));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function reorderIssues(oldIndex, newIndex, issues) {
  return function(dispatch) {
    dispatch(reorderIssuesSuccess(arrayMove(issues, oldIndex, newIndex)));
  };
}
