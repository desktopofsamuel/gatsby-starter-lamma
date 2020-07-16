import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import config from "../../data/SiteConfig";
import "./index.css";

const Body = styled.div`
  min-height: 100vh;
  max-width: 1280px;

  margin: 0 auto;

  @media screen and (max-width: 480px) {
    display: block;
    margin: 0 16px;
  }
`;

const Main = styled.main`
  grid-column: 3/11;
`;

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <Body>
        <Main>
          <Helmet>
            <meta name="description" content={config.siteDescription} />
            <html lang="en" />
          </Helmet>
          {children}
        </Main>
      </Body>
    );
  }
}

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]');
}
