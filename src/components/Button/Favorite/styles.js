import styled from "styled-components/native";
import {colors, metrics} from '../../../theme';

export const Wrapper = styled.TouchableOpacity`
    width: ${metrics.favorite};
    height: ${metrics.favorite};
    background: ${colors.white};
    border-radius: 30px;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: -12%;
    right: ${metrics.baseMargin};
    opacity: 0.3;
    elevation: 5;
`;

