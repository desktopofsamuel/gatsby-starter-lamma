import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 1024px;
  width: 100%;
  padding: 0 1rem;
  margin: 0 auto;
`;

const Container = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Container;
