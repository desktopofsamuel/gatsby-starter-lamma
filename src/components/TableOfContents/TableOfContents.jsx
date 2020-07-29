import React from "react";
import styled from "styled-components";
import ContentList from "./ContentList";
import mediaQuery from "../../utils/mediaQuery";

const Position = styled.aside``;

const Sticky = styled.div`
  position: sticky;
  top: 50%;
  transform: translateY(-50%);

  ${mediaQuery.maxTablet} {
    display: none;
  }
`;

const TableOfContents = ({ toc }) => {
  if (!toc.items) {
    return null;
  }

  return (
    <Position>
      <Sticky>
        <ContentList items={toc.items} />
      </Sticky>
    </Position>
  );
};

export default TableOfContents;
