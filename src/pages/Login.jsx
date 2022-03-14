import React from "react";
import styled from "styled-components";

const Login = () => {
  return (
    <Container>
      <div className="wrapper">
        <h1 className="title">SIGN IN</h1>
        <form action="">
          <input type="text" placeholder="username" />
          <input type="password" placeholder="password" />
          <button>LOGIN</button>
          <a href="/">Forgot Password?</a>
          <a href="/">Create a new account</a>
        </form>
      </div>
    </Container>
  );
};
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center / cover;
  display: flex;
  align-items: center;
  justify-content: center;

  .wrapper {
    padding: 20px;
    width: 25%;
    background-color: white;
    .title {
      font-size: 24px;
      font-weight: 300;
    }
    form {
      display: flex;
      flex-direction: column;
      input {
        flex: 1;
        min-width: 40%;
        margin: 10px 0;
        padding: 10px;
      }
      button {
        width: 40%;
        border: none;
        padding: 15px 20px;
        background-color: teal;
        color: white;
        cursor: pointer;
        margin-bottom: 10px;
      }
      a{
          margin: 5px 0;
          font-size: 12px;
          text-decoration: underline;
          cursor: pointer;
      }
    }
  }
`;

export default Login;
