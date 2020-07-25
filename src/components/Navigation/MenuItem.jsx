import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const Container = styled.nav``;

const MenuList = styled.ul``;

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
      </MenuList>
    </Container>
  );
};

export default MenuItem;
