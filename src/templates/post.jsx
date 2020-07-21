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
import config from "../../data/SiteConfig";

import "./b16-tomorrow-dark.css";
import "./post.css";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 8fr 2fr;
  grid-template-areas: " . main aside";
  gap: 48px;

  @media only screen and (max-width: 600px) {
    display: block;
    margin: 0 16px;
  }
`;

const Container = styled.main`
  grid-area: main;
  overflow: hidden;
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
          <Container>
            <h1>{post.title}</h1>
            <MDXRenderer>{postNode.body}</MDXRenderer>
            <div className="post-meta">
              <PostTags tags={post.tags} />
              <SocialLinks postPath={slug} postNode={postNode} />
            </div>
            <UserInfo config={config} />
            {/* <Disqus postNode={postNode} /> */}
            <Footer config={config} />
          </Container>
          <TableOfContents headings={headings} toc={toc} />
          <TOC2 />
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
