import styled from "styled-components/native";
import {colors, fontSize} from '../../../theme';

export const Label = styled.Text`
    font-family: Montserrat-Medium;
    font-style: normal;
    font-size: ${fontSize.headline};
    color: ${colors.white};
    text-align: left;
    margin: 15px 0;
    text-transform: capitalize;
`;
