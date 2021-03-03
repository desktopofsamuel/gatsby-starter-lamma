import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/Layout/Layout";
import PostListing from "../components/PostListing/PostListing";
import config from "../../static/SiteConfig";

export default class TagTemplate extends React.Component {
  render() {
    const { tag } = this.props.pageContext;
    const postEdges = this.props.data.allMdx.edges;
    return (
      <Layout>
        <div className="tag-container">
          <h1>Post tagged as {tag}</h1>
          <hr />
          <Helmet title={`Posts tagged as "${tag}" | ${config.siteTitle}`} />
          <PostListing postEdges={postEdges} />
        </div>
      </Layout>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query TagPage($tag: String, $fields: [MdxFieldsEnum] = [frontmatter___date]) {
    allMdx(
      limit: 1000
      sort: { order: DESC, fields: $fields }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
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
