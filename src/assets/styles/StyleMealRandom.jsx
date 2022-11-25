import styled from "styled-components";
import { Colors } from "./Colors";
import { Buttons } from "./StyleButtons";
const { secondary, tertiary, black75 } =
  Colors;

export const SectionMealRandom = styled.section`
  background-color: ${(props) => black75};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;

export const ButtonMealRandom = styled(Buttons)`
  width: 200px;
  height: 40px;
  color: ${(props) => secondary};
  font-weight: bold;
  border: 2px solid ${(props) => tertiary};
  margin: 20px 0 50px 0;
`;
