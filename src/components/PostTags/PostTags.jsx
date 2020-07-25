import React, { Component } from "react";
import Tag from "../Tag/Tag";

class PostTags extends Component {
  render() {
    const { tags } = this.props;
    return (
      <div className="post-tag-container">
        {tags && tags.map((tag) => <Tag key={tag} tag={tag} />)}
      </div>
    );
  }
}

export default PostTags;
