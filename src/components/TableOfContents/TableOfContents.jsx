import React from "react";
import ContentList from "./ContentList";
import styled from "styled-components";

const Position = styled.aside`
  grid-column: 11 / 13;
  height: 100%;
`;

const TableOfContents = ({ toc }) => {
  if (!toc.items) {
    return null;
  }

  return (
    <Position>
      <ContentList items={toc.items} />
    </Position>
  );
};

export default TableOfContents;
