import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import DarkModeToggle from "./DarkModeToggle";

const Container = styled.nav``;

const MenuList = styled.ul`
  display: flex;
`;

const Item = styled(Link)`
  margin-right: 16px;
  color: var(--color-heading);
  text-decoration: none;
`;

const MenuItem = ({ menu }) => {
  return (
    <Container>
      <MenuList>
        {menu.map((item) => (
          <Item key={item.path} to={item.path}>
            {item.label}
          </Item>
        ))}
        <DarkModeToggle />
      </MenuList>
    </Container>
  );
};

export default MenuItem;
