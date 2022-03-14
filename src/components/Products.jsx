import React, { useEffect } from "react";
import styled from "styled-components";
import useStore from "../contexts/useStore";
import { getPopularProducts } from "../data";
import Product from "./ProductCard";

const Products = () => {
  const { popularProducts, setPopularProducts, setIsLoading } = useStore();
  const dataFetcher = async () => {
    try {
      const data = await getPopularProducts();
      setPopularProducts(data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    dataFetcher();
  }, []);

  return (
    <Container>
      {popularProducts &&
        popularProducts.map((item) => <Product item={item} key={item.id} />)}
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
export default Products;
