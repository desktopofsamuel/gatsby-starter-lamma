import React, { Component } from "react";
import styled from "styled-components";
import UserLinks from "../UserLinks/UserLinks";
import Container from "../Container/Container";

const Contain = styled.footer`
  justify-content: center;
  align-content: center;
  margin: 4rem 0 0 0;
  padding: 1rem 0;
  border-top: 1px solid var(--color-border);
`;

const Wrapper = styled.section`
  padding: 0.5rem 0;
`;

const FooterMain = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  color: var(--color-secondary-element);

  p {
    display: block;
    font-weight: var(--font-weight-bold);
    margin: 0;
    color: var(--color-heading);
  }
`;

class Footer extends Component {
  render() {
    const { config } = this.props;
    const { copyright } = config;
    if (!copyright) {
      return null;
    }
    return (
      <Contain>
        <Container>
          <Wrapper>
            <FooterMain>
              <Wrapper>
                <p>{config.siteTitle}</p>
                <small>{copyright}</small>
              </Wrapper>
              <UserLinks config={config} labeled />
            </FooterMain>
          </Wrapper>
        </Container>
      </Contain>
    );
  }
}

export default Footer;
