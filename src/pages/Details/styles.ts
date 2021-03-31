import { LinearGradient } from 'expo-linear-gradient';
import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

interface IProps{
  size?: number;
  color?: string;
}
export const Container = styled.View`
  flex: 5;
  background-color: #000;
`;
export const ScrollContainer = styled.ScrollView`
  flex: 1;
  background-color: #000;
`;

export const HeroeImage = styled.Image`
  background-color: #000;
`;
export const ImageGradient = styled(LinearGradient).attrs({
  colors: ['transparent', '#000'],
})`

  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 100%;
  
`;
export const Image = styled.ImageBackground`
  flex: 4;
`;
export const Title = styled.Text`
  font-size: ${(props :  IProps) => (props.size ? props.size : 14)}px;
  color: ${(props :  IProps) => (props.color ? props.color : '#f1f2f3')};
  top:90%;
  font-family: 'Ubuntu_700Bold';
  padding:0 15px 0;

`;
export const Description = styled.Text`
  font-size: ${(props :  IProps) => (props.size ? props.size : 14)}px;
  color: ${(props :  IProps) => (props.color ? props.color : '#f1f2f3')};
  font-family: 'Roboto_500Medium';
  padding:0 15px 0;
`;
