import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

interface IProps{
  size?: number;
  color?: string;
}

export const Container = styled.View`
  flex: 1;
  padding: 0 10px 0px;
  background-color: #000;
`;
export const Title = styled.Text`
  font-size: 24px;
  color: #f2f2f2;
  font-family: 'Ubuntu_700Bold';
`;
export const EnterpriseCard = styled(TouchableOpacity)`
flex:1;
  margin-top: 10px;
  background-color: #333;
  border-radius: 12px;
  border-width: 1px;
  padding: 4px;
  flex-direction: column;
`;
export const EnterpriseCardImage = styled.Image`
  height: 180px;
  border-radius: 12px;
  position: relative;
`;
export const EnterpriseCardDetails = styled.View`
  padding-top: 6px;
  padding-left: 6px;
  border-radius: 4px;
  flex-direction: row;
  justify-content: space-between;
`;
export const EnterpriseNameText = styled.Text`
  font-size: ${(props :  IProps) => (props.size ? props.size : 14)}px;
  color: ${(props :  IProps) => (props.color ? props.color : '#f1f2f3')};
  font-family: 'Roboto_500Medium';
`;
