import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ProductCard = ({ item }) => {
  return (
    <Box>
      <Link to={`/product/${item.id}`} style={{ textDecoration: "none" }}>
        <Container>
          {/* <Circle /> */}
          <img src={item.image} alt={item.title} />
        </Container>
      </Link>
      <TextStyle>
        <div>{item.title.substring(0,55)}</div>
        <div className="price">${item.price}</div>
      </TextStyle>
    </Box>
  );
};
const Container = styled.div`
  flex: 1;
  flex-direction: column;
  margin: 5px;
  min-height: 350px;
  min-width: 250px;
  max-width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
  transition: all 0.5s;
  /* &:hover {
    transform: translate(-3rem, -3rem);
  } */
  img {
    z-index: 2;
    width: 60%;
    /* height: 80%; */
  }
`;
const Box = styled.div`
  position: relative;
  &:hover ${Container} {
    transform: translate(-3.5rem, -3.5rem);
  }
`;
const TextStyle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #111;
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  /* opacity: 0; */
  color: #fff;
  margin: 10px;
  padding: 0.5rem 1rem;
  transition: all 0.5s ease;
  z-index: -1;
  cursor: pointer;
  .price {
    font-size: 1.1rem;
  }
`;
const Circle = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
`;
export default ProductCard;
