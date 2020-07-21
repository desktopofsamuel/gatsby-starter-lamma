import React from "react";
import SEO from "../components/SEO/SEO";
import Layout from "../components/Layout/Layout";

const DefaultPageTemplate = ({ children, pageContext }) => {
  const { slug } = pageContext;

  return (
    <Layout>
      <SEO />
      {children}
    </Layout>
  );
};

export default DefaultPageTemplate;
