import React, { Component } from "react";
import Layout from "../layout";

export default class DefaultPageLayout extends Component {
  render() {
    return <Layout>{children}</Layout>;
  }
}
