import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/Layout/Layout";
import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../static/SiteConfig";
import Hero from "../components/Hero/Hero";

const Landing = ({ data }) => {
  const postEdges = data.allMdx.edges;
  return (
    <Layout>
      <div className="landing-container">
        <div className="posts-container">
          <Helmet title={config.siteTitle} />
          <SEO />
          <Hero />
          <PostListing postEdges={postEdges} />
        </div>
      </div>
    </Layout>
  );
};

export default Landing;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query LandingQuery($fields: [MdxFieldsEnum] = [frontmatter___date]) {
    allMdx(sort: { order: DESC, fields: $fields }) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`;
