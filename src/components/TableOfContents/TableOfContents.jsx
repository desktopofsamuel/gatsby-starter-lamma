import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import ContentList from "./ContentList";
import mediaQuery from "../../utils/mediaQuery";

const Position = styled.aside`
  ${mediaQuery.maxMobile} {
    display: none;
  }
`;

const Sticky = styled.div`
  position: sticky;
  top: 50%;
  transform: translateY(-50%);
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
