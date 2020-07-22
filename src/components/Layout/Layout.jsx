import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import config from "../../../data/SiteConfig";
import "../../utils/styles";

const GlobalStyle = createGlobalStyle`

* {
  box-sizing: border-box;
}

html {
  height: 100%;
  width: 100%;
  font-family: var(--font-primary);
  font-weight: var(--font-weight-regular);
  line-height: var(--font-base-line-height);
  font-size: var(--font-size-base);
  color: var(--color-white);
  background-color: var(--color-background);
  text-rendering: optimizeLegibility;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  box-sizing: border-box; 
  scroll-behavior: auto; 
}

body {
  margin: 0;
  padding: 0;
  min-height: 100%;
  min-width: 100%;
  -moz-osx-font-smoothing: grayscale; 
  -webkit-font-smoothing: antialiased; 
}

p, dl, ol, ul, pre, blockquote {
  color: var(--color-paragraph-text);

}


main > p > a {
  color: var(--color-link-text);
  border-bottom: 1px solid var(--color-link-decoration);
  text-decoration: none;
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

const LayoutTemplate = ({ children }) => {
  return (
    <Body>
      <GlobalStyle />
      <Helmet>
        <meta name="description" content={config.siteDescription} />
      </Helmet>
      {children}
    </Body>
  );
};

export default LayoutTemplate;

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]');
}
