import React, { useState } from "react";
import Issues from "./Issues";
import Repos from "./Repos";
import styled from "styled-components";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { loadRepos } from "../redux/actions/reposActions";
import {
  loadIssues,
  reorderIssuesSuccess
} from "../redux/actions/issuesActions";

const GridContainer = styled.div`
  display: grid;
  column-gap: 20px;
  row-gap: 20px;
  margin: 20px 20%;
`;

const Container = ({ repos, actions, issues }) => {
  const [input, setInput] = useState("");

  const handleSubmit = async key => {
    try {
      await actions.loadRepos(key);
    } catch (error) {
      throw error;
    }
  };

  const handleClick = async url => {
    try {
      await actions.loadIssues(url);
    } catch (error) {
      throw error;
    }
  };

  return (
    <GridContainer>
      <div>
        <input
          type="text"
          size="50"
          placeholder="Enter Github Key"
          onChange={e => {
            e.preventDefault();
            setInput(e.target.value);
          }}
        />{" "}
        <button onClick={() => handleSubmit(input)}>Submit</button>
      </div>
      <Issues issues={issues} />
      <Repos handleClick={handleClick} repos={repos} />
    </GridContainer>
  );
};

function mapStateToProps({ repos, issues }) {
  return { repos, issues };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadRepos: bindActionCreators(loadRepos, dispatch),
      loadIssues: bindActionCreators(loadIssues, dispatch),
      reorderIssuesSuccess: bindActionCreators(reorderIssuesSuccess, dispatch)
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);
