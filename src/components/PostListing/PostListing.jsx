import React from "react";
import styled from "styled-components";
import Button from "../Button/Button";

const Article = styled.article`
  padding: 2rem 1rem 4rem 0rem;
  border-bottom: none;
  text-decoration: none;

  &:nth-child(2n) {
    padding-left: 2rem;
  }

  &:not(:nth-child(2n)) {
    border-right: 1px solid var(--color-border);
  }

  &:not(:nth-last-child(-n + 2)) {
    border-bottom: 1px solid var(--color-border);
  }
`;

const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
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
