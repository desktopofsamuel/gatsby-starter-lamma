import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Container from "../Container/Container";
import config from "../../../static/SiteConfig";
import Menu from "./Menu";
import SecondaryMenu from "./SecondaryMenu";

const Header = styled.header`
  background-color: var(--color-background-alt);
  transition: 1s all ease-in-out;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Navigation = () => {
  const { menu } = config;
  const { secondarymenu } = config;
  const title = config.siteTitle;

  return (
    <Header>
      <Container>
        <Wrapper as="nav">
          <Link to="/">
            <p>{title}</p>
          </Link>
          <Menu menu={menu} />
        </Wrapper>
        <Wrapper as="nav">
          <SecondaryMenu menu={secondarymenu} />
        </Wrapper>
      </Container>
    </Header>
  );
};

export default Navigation;
