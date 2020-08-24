import styled from "styled-components/native";
import {colors, fontSize} from '../../../theme';

export const Label = styled.Text`
    font-family: Montserrat-Regular;
    font-style: normal;
    font-weight: normal;
    font-size: ${fontSize.regular};
    line-height: 18px;
    color: ${colors.white};
    text-align: ${props => props.align ? props.align : 'left'};
`;

