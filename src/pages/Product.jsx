import { Add, Remove } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <div className="imgContainer">
          <img src="https://i.ibb.co/S6qMxwr/jean.jpg" alt="" />
        </div>
        <div className="infoContainer">
          <h1 className="title">Denim Jumpsuit</h1>
          <p className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            odit facilis necessitatibus blanditiis doloribus tempore ullam.
            Praesentium eius enim earum.
          </p>
          <span className="price">$20</span>
          <FilterContainer>
            <div className="filter">
              <span className="filterTitle">Color</span>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="grey" />
            </div>
            <div className="filter">
              <div className="filterTitle">Size</div>
              <select name="" id="">
                <option value="">XS</option>
                <option value="">S</option>
                <option value="">M</option>
                <option value="">L</option>
                <option value="">XL</option>
              </select>
            </div>
          </FilterContainer>
          <div className="addContainer">
            <div className="amountContainer">
              <Remove />
              <span className="amount">1</span>
              <Add />
            </div>
            <button>Add to cart</button>
          </div>
        </div>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};
const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  .imgContainer {
    flex: 1;
    img {
      width: 100%;
      height: 90vh;
      object-fit: cover;
    }
  }
  .infoContainer {
    flex: 1;
    padding: 0 50px;
    h1 {
      font-weight: 200;
    }
    .desc {
      margin: 20px 0;
    }
    .price {
      font-size: 40px;
      font-weight: 100;
    }
    .addContainer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 50%;
      .amountContainer {
        display: flex;
        align-items: center;
        font-weight: 700;
        .amount {
          width: 30px;
          height: 30px;
          border-radius: 10px;
          border: 1px solid teal;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 5px;
        }
      }
      button{
        padding: 15px;
        font-weight: 500;
        border: 2px solid teal;
        background-color: white;
        cursor: pointer;
        &:hover{
          background-color: #f8f4f4;
        }
      }
    }
  }
`;
const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  .filter {
    display: flex;
    align-items: center;
    .filterTitle {
      font-size: 20px;
      font-weight: 200;
    }
    select {
      margin-left: 10px;
      padding: 5px;
    }
  }
`;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0 5px;
  cursor: pointer;
`;
export default Product;
