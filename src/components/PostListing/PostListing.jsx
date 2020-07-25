import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const Article = styled(Link)`
  border-bottom: none;
  text-decoration: none;

  h2 {
    color: var(--color-heading);
  }

  p {
    color: var(--color-paragraph-text);
  }
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
      <div>
        {
          /* Your post list here. */
          postList.map((post) => (
            <Article to={post.path} key={post.title}>
              <h2>{post.title}</h2>
              <p dangerouslySetInnerHTML={{ __html: post.excerpt }} />
            </Article>
          ))
        }
      </div>
    );
  }
}

export default PostListing;
