import styled from 'styled-components/native';
import Colors from '../../utils/colors';

export const Container = styled.TouchableOpacity`
  height: 40px;
  width: 100px;
  padding: 10px;
  background: ${Colors.blue};
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: ${Colors.yellow};
  font-family: 'Marvel-Regular';
  font-size: 20px;
`;

export const Indicator = styled.ActivityIndicator.attrs({
  color: Colors.white,
})``;
