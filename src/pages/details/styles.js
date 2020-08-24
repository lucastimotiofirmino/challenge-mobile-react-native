import styled from "styled-components/native";
import Constants from 'expo-constants';
import {colors, metrics} from '../../theme';

export const ApplicationProvider = styled.View`
  flex: 1;
  background-color: ${colors.background};
`;

export const Wrapper = styled.View`
   padding-horizontal: ${metrics.baseMargin};
   padding-top: ${Constants.statusBarHeight};
`;

export const DescriptionWrapper = styled.View`
   margin-bottom: 20px;
`;

export const ScrollView = styled.ScrollView`
  flex: 1;
`;
