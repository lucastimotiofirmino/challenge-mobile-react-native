import styled from "styled-components/native";
import Constants from 'expo-constants';
import {colors, metrics} from '../../theme';

export const ApplicationProvider = styled.View`
  flex: 1;
  background-color: ${colors.background};
`;

export const Wrapper = styled.View`
   padding: ${metrics.baseMargin};
`;


