import React from "react";
import styled from "styled-components";
import TOCItem from "./TOCItem";

const Tableofcontentlist = styled.ul``;

export default ({ headings, toc }) => (
  <div>
    <Tableofcontentlist>
      <TOCItem headings={headings} toc={toc} />
    </Tableofcontentlist>

    <pre>{JSON.stringify(headings, null, 2)}</pre>
  </div>
);
