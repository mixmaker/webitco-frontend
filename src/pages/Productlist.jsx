import React, { useEffect } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { useLocation } from "react-router";
import useStore from "../contexts/useStore";
import { getCategoryProducts, getPopularProducts } from "../api";

const Productlist = () => {
  const { category, setCategory, setIsLoading } = useStore();
  const location = useLocation();
  const categoryName = location.pathname.split("/")[2];
  const getCategoryData = async () => {
    try {
      if (categoryName === "all") {
        const data = await getPopularProducts();
        setCategory(data);
        setIsLoading(false);
      } else {
        const data = await getCategoryProducts(categoryName);
        setCategory(data);
        setIsLoading(false);
      }
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCategoryData();
    return () => {
      setCategory(undefined);
    };
  }, []);

  return (
    <Container>
      <Navbar />
      <Announcement />
      {/* <h1 className="title">Dresses</h1> */}
      <FilterContainer>
        {/* <div className="filter">
          <span className="filterText">Filter Products:</span>
          <select name="" id="">
              <option disabled selected>Color</option>
              <option value="">White</option>
              <option value="">Black</option>
              <option value="">Yellow</option>
              <option value="">Red</option>
              <option value="">Green</option>
          </select>
          <select name="" id="">
              <option disabled selected>Size</option>
              <option>XS</option>
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
          </select>
        </div> */}
        <div className="filter">
          <span className="filterText">Sort Products:</span>
          <select name="" id="">
            <option>Newest</option>
            <option>Popularity</option>
            <option>Price (asc)</option>
            <option>Price (desc)</option>
          </select>
        </div>
      </FilterContainer>
      <Products
        data={category}
        title={
          categoryName === "all"
            ? "Showing all products"
            : `Showing results for ${categoryName}`
        }
      />
      <Newsletter />
      <Footer />
    </Container>
  );
};
const Container = styled.div`
  h1 {
    margin: 20px;
  }
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  .filter {
    margin: 20px;
  }
  .filterText {
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
  }
  select {
    padding: 10px;
    margin-right: 20px;
  }
`;
export default Productlist;
