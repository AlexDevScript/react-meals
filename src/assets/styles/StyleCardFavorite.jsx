import styled from "styled-components";
import { Colors } from "./Colors";
import Background from "../img/bg01.jpg";
import Background02 from "../img/bg001.jpg";

const { primaryModal, pink, fourth, white } = Colors;

export const ContainerFavorites = styled.div`
  width: 95%;
  min-height: 100px;
  max-height: 490px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url(${Background}) no-repeat fixed;
  background-position: center center;
  background-size: cover;
  background-size: 100% 100%;
  margin: 20px auto;

  @media screen and (min-width: 576px) {
    width: 90%;
    background: url(${Background02}) no-repeat fixed;
    background-position: center center;
    background-size: cover;
  }

  @media screen and (min-width: 992px) {
    max-height: 600px;
  }

   @media screen and (min-width: 1900px) {
    background: url("");
    background-color: ${props => white};
   }

  .container__cards--favorites {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 10px;
    overflow: hidden;
    overflow-y: scroll;

    &::-webkit-scrollbar {
      height: 5px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${(props) => fourth};
      border-radius: 10px;
    }

    @media screen and (min-width: 992px) {
      gap: 25px;
    }

    figure {
      width: 200px;
      height: 240px;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      background-color: ${(props) => primaryModal};
      border-radius: 8px;
      margin-bottom: 20px;

      @media screen and (min-width: 992px) {
        width: 260px;
        height: 260px;
      }

      figcaption {
        width: 100%;
        min-height: 50px;
        max-height: 80px;
        background-color: ${(props) => fourth};
        color: ${(props) => pink};
        font-weight: bold;
        letter-spacing: 1px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 5px 10px;
        position: relative;
        border-top: 3px solid ${(props) => white};
        border-bottom: 3px solid ${(props) => white};
      }
      img {
        width: 110px;
        height: 110px;
        border: 5px solid ${(props) => pink};
        border-radius: 50%;
      }
    }
  }
`;
