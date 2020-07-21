import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import ContentList from "./ContentList";

const Position = styled.aside`
  grid-area: aside;
`;

const Sticky = styled.div`
  position: sticky;
  top: 50%;
  transform: translateY(-50%);

  @media only screen and (max-width: 1280px) {
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
