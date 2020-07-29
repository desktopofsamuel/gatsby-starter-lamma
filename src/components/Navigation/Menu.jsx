import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import DarkModeToggle from "./DarkModeToggle";

const Container = styled.nav`
  display: flex;
  align-items: center;
`;

const Item = styled(Link)`
  margin-right: 16px;
  color: var(--color-heading);
  text-decoration: none;
`;

const MenuItem = ({ menu }) => {
  return (
    <Container>
      {menu.map((item) => (
        <Item key={item.path} to={item.path}>
          {item.label}
        </Item>
      ))}
      <DarkModeToggle />
    </Container>
  );
};

export default MenuItem;
