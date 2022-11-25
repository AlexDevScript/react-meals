import styled from 'styled-components';
import { Colors } from './Colors';
const { redAlert } = Colors;

export const ContainerMessageError = styled.div`
width: 100%;
height: 100px;
color: ${props => redAlert};
font-weight: bold;
font-size: 1.3rem;
letter-spacing: 2px;
display: inline-flex;
justify-content: center;
align-items: center;

`