import styled from "styled-components";


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
    transition: background-color 0.1s;
    color: #010202;
    transition: color 0.5s;
  }
`;

export const Title = styled.h1`
  font-size: 23px;
`;

export const SubTitle = styled.h2`
  width: 100vw;
  font-size: 18px;
  text-align: center;
`;

export const Divider = styled.hr`
  width: 90vw;
  color: #010202;
`;

export const Display = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

export const CostumersDisplay = styled.div`
  width: 70vw;
  min-width: 320px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;