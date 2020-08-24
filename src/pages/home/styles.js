import styled from "styled-components/native";
import Constants from 'expo-constants';
import {colors, metrics} from '../../theme';

export const ApplicationProvider = styled.View`
  flex: 1;
  background-color: ${colors.background};
  padding-top: ${Constants.statusBarHeight};
`;

export const Wrapper = styled.View`
   padding: ${metrics.baseMargin};
   
`;


