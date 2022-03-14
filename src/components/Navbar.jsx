import React from "react";
import styled from "styled-components";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <input type="text" />
            <Search style={{ color: "grey", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <div className="logo">webitco</div>
        </Center>
        <Right>
          <div className="menuItem">
            <Link to={"/register"}>Register</Link>
          </div>
          <div className="menuItem">
            <Link to={"/login"}>Sign in</Link>
          </div>
          <div className="menuItem">
            <Link to={'/cart'}>
              <Badge badgeContent={4}>
                <ShoppingCartOutlined />
              </Badge>
            </Link>
          </div>
        </Right>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  height: 60px;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
  .logo {
    font-weight: bolder;
    font-size: 24px;
  }
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  .menuItem {
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    a {
      text-decoration: none;
      color: #000;
    }
  }
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;
const SearchContainer = styled.div`
  border: 0.5px solid black;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  input {
    border: none;
  }
`;
export default Navbar;
