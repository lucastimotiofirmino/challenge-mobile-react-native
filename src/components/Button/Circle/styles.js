import styled from "styled-components/native";
import {metrics, colors} from "../../../theme";

export const Wrapper = styled.View`
  background-color: ${colors.white};
  width: ${metrics.baseCircle};
  height: ${metrics.baseCircle};
  border-radius: 45px;
  position: absolute;
  right: 10px;
  bottom: 10px;
  opacity: 0.3;
  justify-content: center;
  align-items: center;
`;

export const Center = styled.TouchableOpacity`
    align-self: center;
`;
