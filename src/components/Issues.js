import React from "react";
import { sortableContainer, sortableElement } from "react-sortable-hoc";
import { reorderIssues } from "../redux/actions/issuesActions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import styled from "styled-components";
import moment from "moment";

const Img = styled.img`
  border-radius: 4px;
  padding: 5px;
  width: 50px;
`;
const SortableItem = sortableElement(({ value, img, created, updated }) => {
  return (
    <li>
      {value}
      <Img src={img} alt="avatar" />
      {moment(created).format("DD/MM/YYYY")}
      {" " + moment(updated).fromNow("DD") + " ago"}
    </li>
  );
});

const SortableContainer = sortableContainer(({ children }) => {
  return <ul>{children}</ul>;
});

const Issues = ({ issues = [], actions }) => {
  const onSortEnd = ({ oldIndex, newIndex }) => {
    actions.reorderIssues(oldIndex, newIndex, issues);
  };
  return (
    <>
      {issues.length ? <h1>Issues</h1> : ""}

      <SortableContainer onSortEnd={onSortEnd}>
        {issues.map((issue, index) => (
          <SortableItem
            key={issue.id}
            index={index}
            value={issue.title}
            created={issue.created_at}
            updated={issue.updated_at}
            img={issue.user.avatar_url}
          />
        ))}
      </SortableContainer>
    </>
  );
};

function mapStateToProps({ repos, issues }) {
  return { repos, issues };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      reorderIssues: bindActionCreators(reorderIssues, dispatch)
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Issues);
