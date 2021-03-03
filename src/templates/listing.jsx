import React from "react";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import styled from "styled-components";
import Layout from "../components/Layout/Layout";
import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../static/SiteConfig";
import Hero from "../components/Hero/Hero";

const Pagination = styled.section`
  margin: 4rem 0;
  min-width: 100%;
  display: flex;
  justify-content: space-between;
`;

class Listing extends React.Component {
  renderPaging() {
    const { currentPageNum, pageCount } = this.props.pageContext;
    const prevPage = currentPageNum - 1 === 1 ? "/" : `/${currentPageNum - 1}/`;
    const nextPage = `/${currentPageNum + 1}/`;
    const isFirstPage = currentPageNum === 1;
    const isLastPage = currentPageNum === pageCount;

    return (
      <Pagination>
        {!isFirstPage && <Link to={prevPage}>Previous</Link>}
        {[...Array(pageCount)].map((_val, index) => {
          const pageNum = index + 1;
          return (
            <Link
              key={`listing-page-${pageNum}`}
              to={pageNum === 1 ? "/" : `/${pageNum}/`}
            >
              {pageNum}
            </Link>
          );
        })}
        {!isLastPage && <Link to={nextPage}>Next</Link>}
      </Pagination>
    );
  }

  render() {
    const postEdges = this.props.data.allMdx.edges;

    return (
      <Layout>
        <div className="listing-container">
          <div className="posts-container">
            <Helmet title={config.siteTitle} />
            <SEO />
            <Hero />
            <PostListing postEdges={postEdges} />
          </div>
          {this.renderPaging()}
        </div>
      </Layout>
    );
  }
}

export default Listing;

/* eslint no-undef: "off" */
export const listingQuery = graphql`
  query ListingQuery(
    $skip: Int!
    $limit: Int!
    $fields: [MdxFieldsEnum] = [frontmatter___date]
  ) {
    allMdx(sort: { order: DESC, fields: $fields }, limit: $limit, skip: $skip) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt(pruneLength: 150)
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
