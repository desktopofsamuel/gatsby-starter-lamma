import React from "react";
import styled from "styled-components";
import kebabCase from "lodash/kebabCase";
import { Link } from "gatsby";
import "../../utils/styles";

const Wrapper = styled(Link)`
  display: inline-block;
  flex-direction: column;
  background-color: var(--color-grey-shades-100-a);
  padding: 0.3rem 0.75rem;
  text-decoration: none;
  color: var(--color-grey-shades-700);
  border-radius: 8px;
  transition: 0.3s all ease-in-out;
  border: none;

  &:not(last-child) {
    margin-right: 0.5rem;
  }

  span {
    opacity: 0.5;
    margin-right: 4px;
  }

  &:hover {
    background-color: var(--color-grey-shades-100);
    border: none;
  }
`;

const Tag = ({ className, tag }) => (
  <Wrapper className={className} to={`/tags/${kebabCase(tag)}`}>
    <span>#</span>
    {tag}
  </Wrapper>
);

export default Tag;
