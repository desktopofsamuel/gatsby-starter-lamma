import React from "react";
import ContentList from "./ContentList";

const TableOfContents = ({ toc }) => {
  if (!toc.items) {
    return null;
  }

  return <ContentList items={toc.items} />;
};

export default TableOfContents;
