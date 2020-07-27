import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Button from "../Button/Button";

const Article = styled.article`
  border-bottom: none;
  text-decoration: none;
`;

const Grid = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem 4rem;
`;

class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach((postEdge) => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead,
      });
    });
    return postList;
  }

  render() {
    const postList = this.getPostList();
    return (
      <Grid>
        {
          /* Your post list here. */
          postList.map((post) => (
            <Article key={post.title}>
              <h2>{post.title}</h2>
              <p dangerouslySetInnerHTML={{ __html: post.excerpt }} />
              <Button href={post.path} />
            </Article>
          ))
        }
      </Grid>
    );
  }
}

export default PostListing;
