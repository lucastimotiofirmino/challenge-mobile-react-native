import styled from "styled-components/native";
import {colors, fontSize} from '../../../theme';

export const Label = styled.Text`
    font-family: Montserrat-Italic;
    font-style: normal;
    font-weight: 500;
    font-size: ${fontSize.helper};
    color: ${colors.white};
    text-align: ${props => props.align ? props.align : "left"};
`;
