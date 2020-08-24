import styled from 'styled-components/native';
import Colors from '../../utils/colors';

export const Component = styled.View`
  flex-direction: row;
  padding: 20px;
`;

export const Container = styled.TouchableOpacity`
width: 100%; 
background: ${Colors.white};
border-width: 1px;
border-color: ${Colors.black}
border-top-left-radius: 35px;
border-top-right-radius: 0px;
border-bottom-left-radius: 35px;
border-bottom-right-radius: 35px;
elevation:8;
shadow-color: #000;
shadow-offset: { width: 0, height: 3 };
shadow-opacity: 0.5;
shadow-radius: 7px;  
`;

export const Content = styled.View``;

export const Image = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: 100%;
  height: 176px;
  border-top-left-radius: 35px;
  border-top-right-radius: 0px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
`;

export const Footer = styled.View`
  flex-direction: row;
  padding: 20px;
  align-items: center;
  border-bottom-left-radius: 35px;
  border-bottom-right-radius: 35px;
`;

export const Name = styled.Text`
  color: ${Colors.black};
  font-family: 'Marvel-Regular';
  font-size: 20px;
  text-align: left;
  margin-right: 10px;
  flex: 1;
`;

export const FavoriteView = styled.TouchableOpacity``;

export const FavoriteImage = styled.Image``;
