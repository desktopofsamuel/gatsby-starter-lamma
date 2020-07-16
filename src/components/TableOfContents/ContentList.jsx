import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const Marker = styled.span`
  width: ${(props) => (props.nested ? "12px" : "20px")};
  height: 6px;
  border-radius: 3px;
  background-color: lightgrey;
  margin-right: 8px;
  transition: 0.3s all ease-in-out;
`;

const Anchor = styled.a`
  font-size: ${(props) => (props.nested ? "12px" : "14px")};
  font-weight: ${(props) => (props.nested ? "regular" : "bolder")};
  color: ${(props) => (props.nested ? "lightgrey" : "darkgrey")};
  /* opacity: 0; */
  transition: 0.3s all ease-in-out;
`;

const Container = styled.div`
  display: inline-grid;
  grid-template-columns: 20px auto;
  grid-template-rows: auto auto;
  grid-gap: 8px 16px;
  align-items: center;

  &:hover ${Anchor} {
    color: darkgrey;
  }

  &:hover ${Marker} {
    background-color: darkgrey;
  }
`;

const List = styled.div`
  padding-inline-start: 0;

  &:hover ${Anchor} {
    opacity: 1;
  }
`;

const ContentList = ({ items, nested }) => {
  return (
    <List>
      {items.map((item) => {
        return (
          <ContentItem key={`${item.url}-item`} item={item} nested={nested} />
        );
      })}
    </List>
  );
};

const ContentItem = ({ item, nested }) => (
  <List>
    <Container>
      <Marker nested={nested} />
      <Anchor href={item.url} nested={nested}>
        {item.title}
      </Anchor>
    </Container>
    {item.items && item.items.length && (
      <>
        <ContentList key={`${item.url}-list`} items={item.items} nested />
      </>
    )}
  </List>
);

export default ContentList;
