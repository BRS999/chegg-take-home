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
  float: left;
  margin: 0px 5px 0px 0px;
`;

const NoDots = styled.li`
  list-style-type: none;
  cursor: pointer;
`;

const SortableItem = sortableElement(({ title, img, created, updated }) => {
  return (
    <NoDots>
      <Img src={img} alt="avatar" />
      <div style={{ fontWeight: "bold" }}> {title}</div>
      <div> Created : {moment(created).format("DD/MM/YYYY")}</div>
      <div> Updated : {" " + moment(updated).fromNow("DD") + " ago"}</div>
    </NoDots>
  );
});

const SortableContainer = sortableContainer(({ children }) => {
  return <ul className="column">{children}</ul>;
});

const Issues = ({ issues = [], actions }) => {
  const onSortEnd = ({ oldIndex, newIndex }) => {
    actions.reorderIssues(oldIndex, newIndex, issues);
  };
  return (
    <>
      <SortableContainer onSortEnd={onSortEnd}>
        {issues.length ? <h1>Issues</h1> : ""}
        {issues.map((issue, index) => (
          <SortableItem
            key={issue.id}
            index={index}
            title={issue.title}
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
