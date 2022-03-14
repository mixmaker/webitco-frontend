import React from "react";
import styled from "styled-components";

const Register = () => {
  return (
    <Container>
      <div className="wrapper">
        <h1 className="title">CREATE AN ACOOUNT</h1>
        <form action="">
          <input type="text" placeholder="name" />
          <input type="text" placeholder="last name" />
          <input type="text" placeholder="username" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input type="password" placeholder="confirm password" />
          <span className="agreement">
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </span>
          <button>Create account</button>
        </form>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: 
  linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center/cover;
  display: flex;
  align-items: center;
  justify-content: center;

  .wrapper{
      padding: 20px;
      width: 40%;
      background-color: white;
      .title{
          font-size: 24px;
          font-weight: 300;
      }
      form{
          display: flex;
          flex-wrap: wrap;
          input{
              flex: 1;
              min-width: 40%;
              margin: 20px 30px 0 0;
              padding: 10px;
          }
          .agreement{
              font-size: 12px;
              margin: 20px 0;
          }
          button{
              width: 40%;
              border: none;
              padding: 15px 20px;
              background-color: teal;
              color: white;
              cursor: pointer;
          }
      }
  }
`;

export default Register;
