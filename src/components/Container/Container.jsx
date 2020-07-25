import React from "react";
import styled from "styled-components";
import mediaQuery from "../../utils/mediaQuery";

const Wrapper = styled.div`
  max-width: 1280px;
  padding: 0 24px;
  margin: 0 auto;

  ${mediaQuery.maxMobile} {
    display: block;
    padding: 0 16px;
  }
`;

const Container = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Container;
