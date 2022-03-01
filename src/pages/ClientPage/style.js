import styled from "styled-components";

export const Title = styled.h1`
  font-size: 23px;
`;

export const Divider = styled.hr`
  width: 90vw;
  color: #010202;
`;

export const SuportBar = styled.div`
  margin-top: 20px;
  height: 60px;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Button = styled.button`
  border: none;
  background-color: #010202;
  color: #fff;
  height: 50px;
  width: 120px;
  border-radius: 80px;
  font-family: "Poppins", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  font-size: 16px;
  cursor: pointer;

  &&:hover {
    background-color: #808080;
    transition: background-color 0.5s;
    color: #010202;
    transition: color 1s;
  }
`;

export const Form = styled.form`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Image = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 20%;
  border: 2px solid #d3d3d3;
`;