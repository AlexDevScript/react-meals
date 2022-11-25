import styled from "styled-components";
import { Colors } from "./Colors";

const { primary, tertiary, primaryModal, pink } = Colors;

export const CardMeal = styled.div`
  width: 250px;
  height: 250px;
  background-color: ${(props) => primary};
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 10px;
  margin-bottom: 80px;

    @media screen and (min-width: 992px) {
      width: 250px;
      height: 300px;      
    }

  .card__header {
    width: 100%;
    height: 80px;
    position: relative;

    &:before {
      content: "";
      position: absolute;
      width: 134px;
      height: 134px;
      margin: 0 auto;
      bottom: -7px;
      left: 58px;
      background-color: ${(props) => pink};
      border-radius: 50%;

      @media screen and (min-width: 992px) {
       width: 150px;
      height: 150px;
      bottom: -30px;
      left: 50px;
    }
    }

    img {
      width: 130px;
      margin-top: -50px;
      border-radius: 50%;
      position: relative;

      @media screen and (min-width: 992px) {
      width: 150px;
    }
    }
  }

  .card__body {
    background-color: ${(props) => tertiary};
    border-top: 3px solid ${(props) => pink};
    border-bottom: 3px solid ${(props) => pink};

    p {
      padding: 3px;
      font-weight: bold;
      color: ${(props) => primaryModal};
      text-shadow: 0px 4px 9px rgba(191, 80, 90, 1);
    }
  }

  .card__footer {
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;
