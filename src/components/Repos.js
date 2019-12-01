import React from "react";
import styled from "styled-components";

const Hover = styled.li`
  :hover {
    background: lightblue;
  }
`;

const Repos = ({ repos = [], handleClick }) => {
  return (
    <>
      {repos.length ? <h1>Repos</h1> : ""}

      <ul>
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
