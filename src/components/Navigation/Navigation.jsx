import React from "react";
import styled from "styled-components";
import Container from "../Container/Container";
import config from "../../../static/SiteConfig";
import MenuItem from "./MenuItem";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Navigation = ({}) => {
  const { menu } = config;
  const title = config.siteTitle;

  return (
    <header>
      <Container>
        <Wrapper>
          <p>{title}</p>
          <MenuItem menu={menu} />
        </Wrapper>
      </Container>
    </header>
  );
};

export default Navigation;
