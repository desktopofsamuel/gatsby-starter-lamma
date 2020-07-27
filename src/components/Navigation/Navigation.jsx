import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Container from "../Container/Container";
import config from "../../../static/SiteConfig";
import Menu from "./Menu";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Navigation = () => {
  const { menu } = config;
  const title = config.siteTitle;

  return (
    <header>
      <Container>
        <Wrapper>
          <Link to="/">
            <p>{title}</p>
          </Link>
          <Menu menu={menu} />
        </Wrapper>
      </Container>
    </header>
  );
};

export default Navigation;
