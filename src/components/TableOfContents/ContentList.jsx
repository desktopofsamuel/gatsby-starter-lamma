import React from "react";
import { Link } from "gatsby";

const ContentList = ({ items }) => {
  return (
    <ul>
      {items.map((item) => {
        return <ContentItem key={`${item.url}-item`} item={item} />;
      })}
    </ul>
  );
};

const ContentItem = ({ item }) => (
  <li>
    <a href={item.url}>{item.title}</a>

    {item.items && item.items.length && (
      <ContentList key={`${item.url}-list`} items={item.items} />
    )}
  </li>
);

export default ContentList;
