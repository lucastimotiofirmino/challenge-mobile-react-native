import styled from "styled-components/native";
import {metrics} from '../../../theme';

export const Wrapper = styled.ImageBackground`
    background-color: #FFC2AC;
    margin: 4px;
    height: ${metrics.card};
    flex-grow: 1;
    flex-basis: 0;
    border-radius: ${metrics.baseRadius};
`;
