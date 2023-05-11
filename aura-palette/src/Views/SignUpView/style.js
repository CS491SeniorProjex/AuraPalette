import React from "react";
import styled from "styled-components";

export const AppBackground = styled.div`
  background-color: #eeeeee;
  height: 100lvh;
  overflow: auto;
  display: flex;
  justify-content: center;

  &.dark {
    background-color: #222222;
  }
`;

export const Background = styled.div`
  align-self: flex-start;
  width: 92%;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #dddddd;
  margin: 100px 0px 35px;
  height: auto;
  overflow: auto;
  overflow-x: hidden;

  &.dark {
    background-color: #333333;
  }
`;

export const SignUpInside = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  width: auto;
  height: auto;
  border-radius: 8px;
  padding: 80px 0px;

  input {
    background-color: #ffffff;
    height: 55px;
    border-radius: 8px;
    width: 400px;
    border: none;
    margin-top: 25px;
    font-size: 20px;
    padding-left: 20px;

    &.dark {
      background-color: #000000;
      color: #eee;

      ::placeholder {
        color: #eee;
      }
    }

    @media screen and (max-width: 600px) {
      height: 40px;
      width: 90%;
      font-size: 16px;
    }
  }

  .signUpButton {
    cursor: pointer;
    background-color: #333333;
    height: 55px;
    border-radius: 8px;
    width: 150px;
    border: none;
    margin-top: 50px;
    font-size: 20px;
    font-weight: 400;
    color: white;
    align-self: flex-end;

    &:hover {
      background-color: #444444;
    }

    &.dark {
      background-color: #111;
      color: #ddd;
      
      &:hover {
        background-color: #000;
      }
    }

    @media screen and (max-width: 600px) {
      height: 40px;
      font-size: 16px;
      margin-top: 30px;
    }
  }

  .loginButton {
    cursor: pointer;
    background: none;
    height: 50px;
    border-radius: 8px;
    width: auto;
    border: none;
    margin-top: 20px;
    font-size: 20px;
    font-weight: 300;
    color: #333333;
    align-self: flex-end;

    &:hover {
      color: #444444;
    }

    strong {
      font-weight: 500;
    }

    &.dark {
      color: #ddd;

      &:hover {
        color: #bbb;
      }
    }

    @media screen and (max-width: 600px) {
      font-size: 16px;
    }
  }
`;

export const Title = styled.div`
  font-size: 36px;
  font-weight: 300;
  margin-bottom: 20px;

  &.dark { 
    color: #eee;
  }

  @media screen and (max-width: 600px) {
    font-size: 28px;
    margin-bottom: 10px;
  }
`;
