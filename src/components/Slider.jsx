import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { sliderItems } from "../data";

const Slider = () => {
  const navigationtoproducts = useNavigate();
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => {
          return (
            <Slide bg={item.bg} key={item.id}>
              <div className="imgContainer">
                <img src={item.img} alt="" />
              </div>
              <div className="infoContainer">
                <h1 className="title">{item.title}</h1>
                <p className="desc">{item.desc}</p>
                <button
                  onClick={() => navigationtoproducts("/products/category")}
                >
                  SHOP NOW
                </button>
              </div>
            </Slide>
          );
        })}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  transition: 0.5s;
`;
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
  .imgContainer {
    height: 100%;
    flex: 1;
    img {
      height: 100vh;
    }
  }
  .infoContainer {
    padding: 50px;
    flex: 1;
    .title {
      font-size: 70px;
    }
    .desc {
      margin: 50px 0;
      font-size: 20px;
      font-weight: 500;
      letter-spacing: 3px;
    }
    button {
      padding: 10px;
      font-size: 20px;
      background-color: transparent;
      cursor: pointer;
    }
  }
`;
export default Slider;
