import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import styled from "styled-components";
import Layout from "../components/Layout/Layout";
import UserInfo from "../components/UserInfo/UserInfo";
import Disqus from "../components/Disqus/Disqus";
import PostTags from "../components/PostTags/PostTags";
import SocialLinks from "../components/SocialLinks/SocialLinks";
import SEO from "../components/SEO/SEO";
import Footer from "../components/Footer/Footer";
import TableOfContents from "../components/TableOfContents/TableOfContents";
import TOC2 from "../components/TableOfContents/TOC2";
import config from "../../static/SiteConfig";
import mediaQuery from "../utils/mediaQuery";
import "./b16-tomorrow-dark.css";

const Grid = styled.div`
  display: grid;
  grid-template-columns: minmax(50px, 1fr) 8fr minmax(50px, 1fr);
  grid-auto-flow: column;
  gap: 5vw;

  ${mediaQuery.maxTablet} {
    display: flex;
    flex-direction: column;
  }
`;

const Container = styled.main`
  overflow: hidden;
  max-width: 700px;
  padding: 0 24px;
  margin: 0 auto;

  ${mediaQuery.maxMobile} {
    display: block;
    padding: 0 16px;
  }
`;

export default class PostTemplate extends React.Component {
  render() {
    const { data, pageContext } = this.props;
    const { slug } = pageContext;
    const postNode = data.mdx;
    const headings = postNode.headings;
    const toc = postNode.tableOfContents;
    const post = postNode.frontmatter;
    if (!post.id) {
      post.id = slug;
    }
    return (
      <Layout>
        <Helmet>
          <title>{`${post.title} | ${config.siteTitle}`}</title>
        </Helmet>
        <SEO postPath={slug} postNode={postNode} postSEO />
        <Grid>
          <SocialLinks postPath={slug} postNode={postNode} />
          <Container>
            <h1>{post.title}</h1>
            <small>
              <time>{post.date}</time>
            </small>
            <MDXRenderer>{postNode.body}</MDXRenderer>
            <div className="post-meta">
              <PostTags tags={post.tags} />
            </div>
            {/* <Disqus postNode={postNode} /> */}
          </Container>
          <TableOfContents headings={headings} toc={toc} />
          {/* <TOC2 /> */}
        </Grid>
      </Layout>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      ...post
    }
  }
`;
