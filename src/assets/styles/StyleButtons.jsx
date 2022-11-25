import styled from "styled-components";
import { Colors } from "./Colors";
const {
  secondary,
  primaryModal,
  tertiary,
  pink,
} = Colors;

export const Button = styled.button`
  height: 35px;
  border: 0;
  padding: 5px;
  border-radius: 5px;
  font-size: 0.9rem;
  letter-spacing: 2px;
  font-family: "Nunito", sans-serif;
  background: #e8e8e8;
  border: 1px solid #e8e8e8;
  transition: all 0.3s;
  box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff;
  text-shadow: 0px 4px 9px rgba(191, 80, 90, 1);

  &:hover {
    border: 1px solid white;
  }

  &:active {
    -webkit-box-shadow: 4px 4px 12px #c5c5c5, -4px -4px 12px #ffffff;
    box-shadow: 4px 4px 12px #c5c5c5, -4px -4px 12px #ffffff;
  }
`;

export const ButtonForm = styled(Button)`
  width: 100px;
  color: ${(props) => secondary};
  font-weight: bold;
  border: 2px solid ${(props) => tertiary};
  background-color: transparent;
  box-shadow: none;
`;

export const ButtonFavorites = styled(Button)`
  width: 200px;
  height: 50px;
  color: ${(props) => primaryModal};
  letter-spacing: 2px;
  font-size: 1rem;
  background-color: #e8e8e8;
  font-weight: bold;
  box-shadow: 3px 3px 12px ${(props) => pink}, -3px -3px 12px #ffffff;
  display: inline-flex;
  align-items: center;
  margin: 20px 0;
`;

export const ButtonInfo = styled(Button)`
  width: 140px;
  font-weight: bold;
  font-size: 0.8rem;
  letter-spacing: 1px;
  box-shadow: 2px 2px 7px ${(props) => pink}, -2px -2px 7px #ffffff;
`;

export const ButtonHeartFav = styled(Button)`
  width: 35px;
  height: 30px;
  box-shadow: 2px 2px 7px ${(props) => pink}, -2px -2px 7px #ffffff;

  img {
    width: 70%;
    margin: auto;
  }
`;

export const ButtonModalVideo = styled(Button)`
  width: 120px;
  font-weight: bold;
  font-size: 0.8rem;
  box-shadow: 2px 2px 7px ${(props) => pink}, -2px -2px 7px #ffffff;
`;

export const ButtonModalClose = styled(Button)`
  width: 80px;
  font-weight: bold;
  box-shadow: 2px 2px 7px ${(props) => pink}, -2px -2px 7px #ffffff;
`;
