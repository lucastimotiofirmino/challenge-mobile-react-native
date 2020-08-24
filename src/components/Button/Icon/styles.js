import styled from "styled-components/native";
import { SimpleLineIcons, FontAwesome5 } from '@expo/vector-icons';
import {colors, metrics} from '../../../theme';

export const Wrapper = styled.TouchableOpacity`
  margin-right: ${metrics.baseMargin};
  justify-content: center;
  align-items: center;
`;

export const SimpleLine = styled(SimpleLineIcons)`
    color: ${props => props.color ? props.color : colors.white};
    align-self: center;
`;

export const FontAwesome = styled(FontAwesome5)`
    color: ${props => props.color ? props.color : colors.white};
    align-self: center;
`;
