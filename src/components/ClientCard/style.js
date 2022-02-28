import styled from "styled-components";

export const Card = styled.div`
  margin: 20px;
  width: 280px;
  height: 200px;
  box-shadow: 0px 5px 15px -4px rgba(128, 128, 128, 1);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const DeleteButton = styled.button`
  border: none;
  background-color: #fff;
  color: #cf2c1f;
  height: 30px;
  width: 30px;
  border-radius: 8px;
  font-family: "Poppins", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  font-size: 16px;
  cursor: pointer;
`;

export const EditButton = styled.button`
  border: none;
  background-color: #fff;
  height: 30px;
  width: 30px;
  border-radius: 8px;
  font-family: "Poppins", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  font-size: 16px;
  cursor: pointer;
`;

export const NameClient = styled.h2`
  margin-left: 20px;
  font-size: 22px;
`;

export const Description = styled.p`
  margin-left: 20px;
`;

export const SuspendItems = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 5px;
`;

export const Image = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 20%;
  border: 2px solid #d3d3d3;
`;

export const IconCase = styled.div`
  &&:hover {
    cursor: pointer;
  }
`;
