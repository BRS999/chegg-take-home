import * as types from "./actionTypes";
import Axios from "axios";

export function loadReposSuccess(repos) {
  return {
    type: types.LOAD_REPOS_SUCCESS,
    repos: repos
  };
}

export function loadRepos(token) {
  console.log("token", token);
  return function(dispatch) {
    return Axios.get(`https://api.github.com/user`, {
      headers: { Authorization: `bearer ${token}` }
    })
      .then(({ data }) => {
        Axios.get(`${data.repos_url}`).then(({ data }) => {
          console.log("data", data);
          dispatch(loadReposSuccess(data));
        });
      })
      .catch(error => {
        throw error;
      });
  };
}
