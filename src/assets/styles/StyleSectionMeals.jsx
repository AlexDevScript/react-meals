import styled from "styled-components";
import { Colors } from "./Colors";
const { secondary, black75 } = Colors;
import BackgroundMainMovil from "../img/bg02.jpg";
import BackgroundMainDesktop from "../img/bg002.jpg";

export const SectionMeals = styled.section`
  width: 100%;
  background: url(${BackgroundMainMovil}) fixed no-repeat;
  background-position: center center;
  background-size: cover;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 576px) {
    background: url(${BackgroundMainDesktop}) fixed no-repeat;
    background-position: center center;
    background-size: cover;
  }

  @media screen and (min-width: 1900px) {
    background: url("");
  }

  h2,
  h3 {
    width: 100%;
    letter-spacing: 5px;
    color: ${(props) => secondary};
    text-shadow: 0px 4px 9px rgba(191, 80, 90, 1);
    text-align: center;
    background-color: ${(props) => black75};
  }

  h2 {
    text-transform: uppercase;
    font-size: 1.7rem;

    @media screen and (min-width: 992px) {
      font-size: 2.1rem;
    }
  }

  h3 {
    margin-bottom: 50px;
  }
  .container__cards {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;

    @media screen and (min-width: 1200px) {
      width: 90%;
      gap: 0 50px;
    }
  }
`;
