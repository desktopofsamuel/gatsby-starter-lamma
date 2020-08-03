import React from "react";
import { Helmet } from "react-helmet";
import SEO from "../components/SEO/SEO";
import Layout from "../components/Layout/Layout";
import config from "../../static/SiteConfig";

const DefaultPageTemplate = ({ children, pageContext }) => {
  const { title } = pageContext.frontmatter;

  return (
    <Layout>
      <SEO />
      <Helmet>
        <title>{`${title} | ${config.siteTitle}`}</title>
        <meta name="twitter:title" content={`${title} | ${config.siteTitle}`} />
        <meta property="og:title" content={`${title} | ${config.siteTitle}`} />
      </Helmet>
      <main>{children}</main>
    </Layout>
  );
};

export default DefaultPageTemplate;
