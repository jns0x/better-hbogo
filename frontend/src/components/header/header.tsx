import React from "react";
import {
  Logo,
  Nav,
  Container,
  Group,
  Item,
} from "components/header/header.styles";
import Button from "components/button/button";

const Header: React.FC = () => {
  return (
    <Nav>
      <Container>
        <Group>
          <Logo />
          <Group>
            <Item>SERIES</Item>
            <Item>MOVIES</Item>
            <Item>KIDS</Item>
            <Item>SCHEDULE</Item>
            <Item>
              <img src="/images/search.svg" alt="search" height="16px" />
            </Item>
          </Group>
        </Group>

        <Group>
          <Button color="blue" style={{ marginRight: "5px" }}>
            Registration
          </Button>
          <Button>Login</Button>
        </Group>
      </Container>
    </Nav>
  );
};

export default Header;
