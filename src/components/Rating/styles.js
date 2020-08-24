import styled from "styled-components/native";
import { AntDesign } from '@expo/vector-icons';
import {colors} from '../../theme';

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin: 15px 0;
`;

export const Star = styled(AntDesign)`
    color: ${colors.star};
    margin-right: 7px;
`;
