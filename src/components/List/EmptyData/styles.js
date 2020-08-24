import styled from "styled-components/native";
import {metrics} from '../../../theme';

export const Wrapper = styled.View`
    background-color: transparent;
    margin: 4px;
    border-radius: ${metrics.baseRadius};
    height: ${metrics.card};
    flex-grow: 1;
    flex-basis: 0
`;
