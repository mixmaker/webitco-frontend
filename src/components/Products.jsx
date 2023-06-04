import React, { useEffect } from "react";
import styled from "styled-components";
import useStore from "../contexts/useStore";
import { getPopularProducts } from "../api";
import ProductCard from "./ProductCard";

const Products = ({ title, data }) => {
  return (
    <Container>
      <h1 className="heading">{title}</h1>
      <div className="items">
        {data?.map((item) => (
          <ProductCard item={item} key={item.id} />
        ))}
      </div>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  .heading {
    font-size: 24px;
    margin-bottom: 1rem;
    padding-left: 0.5rem;
  }
  .items {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;
export default Products;
