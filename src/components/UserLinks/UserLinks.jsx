import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  & > * {
    color: var(--color-secondary-element);
    text-decoration: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0);
    transition: 0.3s all ease-in-out;
  }

  & > *:hover {
    color: var(--color-secondary-element-hover);
    border-bottom: 1px solid var(--color-secondary-element-hover);
  }
  & > *:not(last-child) {
    margin-right: 1rem;
  }
`;

class UserLinks extends Component {
  getLinkElements() {
    const { userLinks } = this.props.config;
    const { labeled } = this.props;
    return userLinks.map((link) => (
      <a href={link.url} key={link.label}>
        {labeled ? link.label : ""}
      </a>
    ));
  }

  render() {
    const { userLinks } = this.props.config;
    if (!userLinks) {
      return null;
    }
    return <Wrapper>{this.getLinkElements()}</Wrapper>;
  }
}

export default UserLinks;
