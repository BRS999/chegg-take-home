import reposReducer from "./reposReducer";
import * as actions from "../actions/reposActions";

it("should get load Repos", () => {
  // arrange
  const initialState = [
    {
      name: "A"
    },
    {
      name: "B"
    }
  ];
  const action = actions.loadRepos("token");

  // act
  const newState = reposReducer(initialState, action);

  // assert
  expect(newState.length).toEqual(2);
  expect(newState[0].name).toEqual("A");
  expect(newState[1].name).toEqual("B");
});
