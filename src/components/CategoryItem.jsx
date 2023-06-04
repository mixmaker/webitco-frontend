import { ListItem } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
        <img src={item.img} alt="" />
        <div className="info">
          <h1 className="title">{item.title}</h1>
          <button>Shop Now</button>
        </div>
      </Link>
    </Container>
  );
};

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: #00000045;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .info {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .title {
      color: white;
      margin-bottom: 20px;
    }
    button {
      border: none;
      padding: 10px;
      background-color: white;
      color: grey;
      cursor: pointer;
      font-weight: 600;
    }
  }
`;

export default CategoryItem;
