import styled from "styled-components";
import { Colors } from "./Colors";
import BackgroundHeaderMovil from "../img/bg02.jpg";
import BackgroundHeaderDesktop from "../img/bg002.jpg";

const {
  primary,
  primaryModal,
  secondary,
  tertiary,
  white,
  black,
  black75,
  redAlert,
  pink,
} = Colors;

export const ContainerHeader = styled.header`
  height: 390px;
  background: url(${BackgroundHeaderMovil}) fixed no-repeat;
  background-position: center center;
  background-size: cover;


  @media screen and (min-width: 992px) {
    background: url(${BackgroundHeaderDesktop}) fixed no-repeat;
    background-position: center center;
    background-size: cover;
  }

  @media screen and (min-width: 1200px) {
    height: 650px;
  }

  @media screen and (min-width: 1600px) {
    height: 550px;
  }

  @media screen and (min-width: 1900px) {
    background: url("");
   }

  form {
    width: 90%;
    height: 150px;
    margin: auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    label {
      width: 100%;
      font-weight: bold;
      font-size: 1.3rem;
      letter-spacing: 5px;
      color: ${(props) => primary};
      background-color: ${props => black75};
      padding: 10px 0;
      border-radius: 10px;
    }

    input {
      width: 200px;
      height: 28px;
      font-family: "Nunito", sans-serif;
      outline: none;
      text-align: center;
      border-radius: 5px;
      color: ${(props) => white};
    }

    input[placeholder] {
      background-color: ${(props) => black};
      border: 1px solid ${(props) => secondary};

      font-size: 0.9rem;
      letter-spacing: 1px;

      &::-webkit-input-placeholder {
        color: ${(props) => tertiary};
      }
      &::-moz-placeholder {
        color: ${(props) => tertiary};
      }
    }

    .form__btns {
      width: 90%;
      display: flex;
      justify-content: space-around;

      @media screen and (min-width: 765px) {
        max-width: 50%;
      }
      @media screen and (min-width: 1200px) {
        width: 30%;
      }
    }

    .error__form {
      color: ${(props) => redAlert};
      padding: 5px;
      letter-spacing: 2px;
      font-size: 0.9rem;
    }
  }
`;

export const ContainerCategories = styled.div`
  width: 95%;
  height: 210px;
  margin: 0 auto;
  background-color: ${(props) => primary};

  @media screen and (min-width: 576px) {
    width: 90%;
    margin: auto;
  }

  @media screen and (min-width: 1200px) {
    height: 480px;
  }

  @media screen and (min-width: 1600px) {
    height: 380px;
  }

  h2 {
    height: 50px;
    text-align: center;
    color: ${(props) => pink};
    padding: 5px;
    font-size: 1.7rem;
    letter-spacing: 2px;

    @media screen and (min-width: 992px) {
      font-size: 2.1rem;
    }
  }

  .categories__list {
    height: 160px;
    background-color: ${(props) => tertiary};
    display: flex;
    align-items: center;
    gap: 15px;
    overflow: hidden;
    overflow-x: scroll;

    @media screen and (min-width: 1200px) {
      width: 95%;
      height: 420px;
      margin: auto;
      flex-wrap: wrap;
      justify-content: space-evenly;
    }

    @media screen and (min-width: 1600px) {
      height: 300px;
    }

    &::-webkit-scrollbar {
      height: 7px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${(props) => primaryModal};
      border-radius: 10px;
    }

    figure {
      width: 170px;
      height: auto;
      background-color: ${(props) => secondary};
      text-align: center;
      border-radius: 15px;
      padding: 5px;

      img {
        width: 80%;
      }

      figcaption {
        color: ${(props) => pink};
        letter-spacing: 3px;
        font-weight: bold;
        text-shadow: 0px 4px 9px rgba(191, 80, 90, 1);
      }
    }
  }
`;
