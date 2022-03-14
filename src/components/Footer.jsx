import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <Left>
        <h1 className="logo">webitco</h1>
        <p className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          tempore fuga consequuntur obcaecati eligendi corrupti.
        </p>
        <div className="social">
          <SocialIcon color="3b5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="e4405f">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55acee">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="e60023">
            <Pinterest />
          </SocialIcon>
        </div>
      </Left>
      <Center>
        <h3 className="title">Useful Links</h3>
        <ul>
          <li>Home</li>
          <li>Cart</li>
          <li>Men Fashion</li>
          <li>Women Fashion</li>
          <li>Accessories</li>
          <li>My Account</li>
          <li>Order Tracking</li>
          <li>Wishlist</li>
          <li>Terms</li>
        </ul>
      </Center>
      <Right>
        <h3 className="title">Contact</h3>
        <div className="contactItem">
          <Room style={{marginRight:'10px'}} /> 622 Dixie Path, Souch Tobinchester 98336
        </div>
        <div className="contactItem">
          <Phone style={{marginRight:'10px'}} /> +1 234 56 78
        </div>
        <div className="contactItem">
          <MailOutline style={{marginRight:'10px'}} /> contact@webit.co{" "}
        </div>
        <img src="https://i.ibb.co/Qfvn4z6/payment.png" alt="" />
      </Right>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  .desc {
    margin: 20px 0;
  }
  .social {
    display: flex;
  }
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
  h3 {
    margin-bottom: 30px;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    li {
      margin-bottom: 10px;
      width: 50%;
    }
  }
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
  h3 {
    margin-bottom: 30px;
  }
  .contactItem{
      margin-bottom: 20px;
      display: flex;
      align-items: center;
  }
  img{
      width: 50%;
  }
`;
export default Footer;
