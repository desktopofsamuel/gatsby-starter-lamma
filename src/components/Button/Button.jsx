import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "gatsby";

const Wrapper = styled(Link)`
  padding: 16px 32px;
  font-size: var(--font-size-s);
  letter-spacing: var(--font-small-letter-spacing);
  text-transform: uppercase;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  transition: var(--transition);
  border: 1px var(--color-secondary-element) solid;
  font-weight: var(--font-weight-regular);
  font-size: var(--font-size-2xs);

  &:hover {
    opacity: 0.5;
  }
`;

const Button = ({ href, text, target }) => {
  return (
    <Wrapper to={href} target={target}>
      {text}
      {" →"}
    </Wrapper>
  );
};

export default Button;

Button.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string,
  target: PropTypes.oneOf(["_blank", "_self"]),
};

Button.defaultProps = {
  text: "View More",
  target: "_self",
};
