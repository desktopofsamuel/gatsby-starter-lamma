import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import config from "../../../data/SiteConfig";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}

html {
  height: 100%;
}

body {
  margin: 0;
  padding: 0;
  min-height: 100%;
  min-width: 100%;
}

#___gatsby #gatsby-focus-wrapper {
  min-height: 100vh;
  min-width: 100vw;
}

`;

const Body = styled.div`
  min-height: 100vh;
  max-width: 1280px;
  margin: 0 auto;

  @media only screen and (max-width: 600px) {
    display: block;
    margin: 0 24px;
  }
`;

const Main = styled.main`
  grid-column: 3/11;
`;

const LayoutTemplate = ({ children }) => {
  return (
    <Body>
      <GlobalStyle />
      <Main>
        <Helmet>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        {children}
      </Main>
    </Body>
  );
};

export default LayoutTemplate;

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]');
}
