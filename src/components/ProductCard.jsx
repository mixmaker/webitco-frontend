import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <img src={item.image} alt="" />
      <Link to={"/product/id"}>
        <Info>
          <div className="icon">
            <ShoppingCartOutlined />
          </div>
          <div className="icon">
            <SearchOutlined />
          </div>
          <div className="icon">
            <FavoriteBorderOutlined />
          </div>
        </Info>
      </Link>
    </Container>
  );
};

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all.5s ease;
  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    margin: 10px;
    transition: all 0.5s ease;
    cursor: pointer;
    &:hover {
      background-color: #e9f5f5;
      transform: scale(1.1);
    }
  }
`;
const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-height: 280px;
  min-width: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
  &:hover ${Info} {
    opacity: 1;
  }
  img {
    z-index: 2;
    width: 60%;
    /* height: 80%; */
  }
`;
const Circle = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
`;
export default Product;
