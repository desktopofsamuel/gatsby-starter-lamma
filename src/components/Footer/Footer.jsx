import React, { Component } from "react";
import styled from "styled-components";
import UserLinks from "../UserLinks/UserLinks";
import mediaQuery from "../../utils/mediaQuery";
import "../../utils/styles";

const Boxed = styled.div`
  max-width: 1280px;
  margin: 0 auto;

  ${mediaQuery.maxMobile} {
    display: block;
    margin: 0 24px;
  }
`;

const Container = styled.footer`
  justify-content: center;
  align-content: center;
  margin: 4rem 0 0 0;
  padding: 2rem 0;
  border-top: 1px solid var(--color-grey-shades-100-a);
`;

const Wrapper = styled.section`
  padding: 1rem 0;
`;

const FooterMain = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  color: var(--color-secondary-element);

  h4 {
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
      <Container>
        <Boxed>
          <Wrapper>
            <FooterMain>
              <Wrapper>
                <h4>{config.siteTitle}</h4>
                <small>{copyright}</small>
              </Wrapper>
              <UserLinks config={config} labeled />
            </FooterMain>
          </Wrapper>
        </Boxed>
      </Container>
    );
  }
}

export default Footer;
