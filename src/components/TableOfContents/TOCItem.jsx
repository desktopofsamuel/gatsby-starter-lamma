import React from "react";
import { Link } from "gatsby";
import kebabCase from "lodash/kebabCase";

const TOCItem = ({ headings, toc }) => {
  return (
    <div>
      {headings.map((heading) => (
        <li key={heading.value}>
          <Link to={`/#${kebabCase(heading.value)}`}>{heading.value}</Link>
        </li>
      ))}
    </div>
  );
};

export default TOCItem;
