import styled from "styled-components";
import { Colors } from "./Colors";

const { secondary, primaryModal, primaryModal30, tertiary, black55, black95 } =
  Colors;

import BackgroundModal from "../img/bg01.jpg";

export const ContainerModal = styled.div`
  background-color: ${(props) => black95};
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow-y: scroll;
  z-index: 5;
  display: ${(props) => props.isOpen};

`;

export const ContainerCard = styled.article`
  width: 100%;
  min-height: 640px;
  margin: auto;
  background-image: url(${BackgroundModal});
  background-size: 100% 100%;
  background-repeat: no-repeat;

  @media screen and (min-width: 576px) {
    width: 90%;
    height: 700px;
  }

  @media screen and (min-width: 992px) {
    width: 70%;
    height: 800px;
  }

  @media screen and (min-width: 1200px) {
    width: 50%;
    max-width: 900px;
  }

  .modal__card {
    width: 90%;
    margin: auto;

    @media screen and (min-width: 576px) {
      height: 700px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;
    }

    @media screen and (min-width: 992px) {
      height: 800px;
    }

    .modal__card__title {
      margin: 10px auto;
      background-color: ${(props) => black55};

      @media screen and (min-width: 576px) {
        width: 100%;
      }

      h3 {
        width: 100%;
        height: 60px;
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        text-shadow: 0px 4px 9px rgba(191, 80, 90, 1);
        font-size: 1.3rem;
        color: ${(props) => tertiary};
        letter-spacing: 1px;
        display: inline-flex;
        justify-content: center;
        align-items: center;

        @media screen and (min-width: 992px) {
          font-size: 1.5rem;
          letter-spacing: 3px;
        }
      }
    }

    .modal__card__body {      
      h3 {
        padding: 5px 10px;
        background-color: ${(props) => black55};
        color: ${(props) => secondary};
        letter-spacing: 0.2rem;
      }
      .modal__card__body--ingredients {
        height: 125px;
        background-color: ${(props) => primaryModal30};
        margin-bottom: 10px;

        @media screen and (min-width: 992px) {
          height: 160px;
        }

        ul {
          height: 120px;
          text-align: center;
          line-height: 1.5rem;
          overflow-y: scroll;

          &::-webkit-scrollbar {
            width: 4px;
            border-radius: 10px;
          }

          &::-webkit-scrollbar-thumb {
            background-color: ${(props) => primaryModal};
            border-radius: 20px;
          }

          li {
            font-style: italic;
            font-weight: 600;

            span {
              font-style: normal;
            }
          }
        }
      }

      .modal__card__body--preparation {
        height: 325px;
      
        @media screen and (min-width: 992px) {
            height: 380px;            
          }

        
        .modal__card__body--prepation--instructions {
          height: 280px;
          background-color: ${(props) => primaryModal30};
          overflow-y: scroll;
          font-weight: 600;
          padding: 15px;

          @media screen and (min-width: 992px) {
            height: 340px;            
          }

          &::-webkit-scrollbar {
            width: 4px;
          }

          &::-webkit-scrollbar-thumb {
            background-color: ${(props) => primaryModal};
            border-radius: 20px;
          }
          p {
            line-height: 1.8rem;
          }
        }
      }
    }

    .modal__card__footer {
      width: 100%;
      height: 50px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      background-color: ${(props) => black55};
    }
  }
`;
