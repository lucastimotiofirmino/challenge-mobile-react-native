import styled from "styled-components/native";
import {metrics} from '../../../theme';

export const Wrapper = styled.ImageBackground`
    height: ${metrics.card};
    width: ${metrics.deviceWidth};
    border-radius: ${metrics.doubleBaseRadius}
`;
