import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import config from "../../../static/SiteConfig";
import "../../utils/styles";
import mediaQuery from "../../utils/mediaQuery";
import Footer from "../Footer/Footer";
import Container from "../Container/Container";
import Navigation from "../Navigation/Navigation";

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

#gatsby-focus-wrapper, #___gatsby {
  height: 100%;
  width: 100%;
}

p, dl, ol, ul, pre, blockquote {
  color: var(--color-paragraph-text);
}


`;

const LayoutTemplate = ({ children }) => {
  return (
    <>
      <Navigation />
      <Container>
        <GlobalStyle />
        <Helmet>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        {children}
      </Container>
      <Footer config={config} />
    </>
  );
};

export default LayoutTemplate;

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]', {
    offset: 300,
  });
}
