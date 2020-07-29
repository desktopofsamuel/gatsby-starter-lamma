import React from "react";
import { Helmet } from "react-helmet";
import { createGlobalStyle } from "styled-components";
import config from "../../../static/SiteConfig";
import Footer from "../Footer/Footer";
import Container from "../Container/Container";
import Navigation from "../Navigation/Navigation";

const GlobalStyle = createGlobalStyle`

* {
  box-sizing: border-box;
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
          <html lang="en" />
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        {children}
      </Container>
      <Footer config={config} />
    </>
    // </ThemeProvider>
  );
};

export default LayoutTemplate;

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]', {
    offset: 300,
  });
}
