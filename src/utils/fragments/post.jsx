import { graphql } from "gatsby";

export const query = graphql`
  fragment post on Mdx {
    body
    timeToRead
    excerpt
    frontmatter {
      title
      cover
      date
      category
      tags
    }
    fields {
      slug
      date
    }
    headings {
      depth
      value
    }
    tableOfContents
  }
`;
