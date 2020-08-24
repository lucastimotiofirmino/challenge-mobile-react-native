import styled from "styled-components/native";
import {SimpleLineIcons} from "@expo/vector-icons";
import {colors, fontSize, metrics} from "../../theme";
import {TextInput} from "react-native";

export const Wrapper = styled.View`
  width: 100%;
  padding-horizontal: ${metrics.baseMargin};
  margin-top: 25%;
`;

export const SearchBar = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #F0F0F1;
  border-radius: ${metrics.baseRadius};
  height: 45px;
  width: 100%;
  padding: ${metrics.smallMargin};
  
`;

export const Icon = styled(SimpleLineIcons)`
  color: lightgray;
  margin-horizontal: 5px;
`;

export const Input = styled(TextInput)`
    flex: 1;
    font-family: Montserrat-Regular;
    font-style: normal;
    font-weight: normal;
    font-size: ${fontSize.medium};
    color: ${colors.black};
    margin-left: 10px;
`;
