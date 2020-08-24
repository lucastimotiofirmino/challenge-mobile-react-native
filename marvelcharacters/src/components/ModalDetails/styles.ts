import styled from 'styled-components/native';
import Colors from '../../utils/colors';

export const Container = styled.ImageBackground`
  flex: 1;
  padding: 20px;
`;

export const Content = styled.View``;

export const TitleView = styled.View`
  flex-direction: row;
  padding: 40px;
  align-items: center;
`;

export const Name = styled.Text`
  color: ${Colors.red};
  font-family: 'Marvel-Regular';
  font-size: 40px;
  text-align: left;
  flex: 1;
`;

export const Description = styled.Text`
  color: ${Colors.black};
  font-family: 'Marvel-Regular';
  font-size: 20px;
  text-align: justify;
  background-color: ${Colors.gray};
  padding: 20px;
  border-radius: 35px;
`;

export const FavoriteImage = styled.Image``;

export const ButtonView = styled.View`
  position: absolute;
  bottom: 0;
  right: 0;
  margin-right: 30px;
  margin-bottom: 30px;
`;
