import React from "react";
import styled from "styled-components";
import "./container.css";

const Hover = styled.li`
  :hover {
    font-weight: bold;
    cursor: pointer;
  }
  list-style-type: none;
`;

const Repos = ({ repos = [], handleClick }) => {
  return (
    <>
      <ul className="column">
        {repos.length ? <h1>Repos</h1> : ""}
        {repos.map(repo => {
          return (
            <Hover key={repo.id} onClick={() => handleClick(repo.url)}>
              <span>{repo.name}</span>
            </Hover>
          );
        })}
      </ul>
    </>
  );
};

export default Repos;
