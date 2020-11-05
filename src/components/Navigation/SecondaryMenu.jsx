import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const Container = styled.nav``;

const Item = styled(Link)`
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-bold);
  margin-right: 16px;
  color: var(--color-heading);
  text-decoration: none;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  p {
    margin-right: 24px;
    font-size: var(--font-size-xs);
  }
`;

const SecondaryMenu = ({ menu }) => {
  return (
    <Container>
      <Wrapper>
        <p>Topics</p>
        {menu.map((item) => (
          <Item key={item.path} to={item.path}>
            {item.label}
          </Item>
        ))}
      </Wrapper>
    </Container>
  );
};

export default SecondaryMenu;
