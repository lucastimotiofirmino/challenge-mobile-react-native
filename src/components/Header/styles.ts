import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 15px;
  background-color: #3b0c07;
`;

export const Content = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const HeaderActionButton = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  margin-top: 5px;
  margin-bottom: 0px;
  margin-left: 10px;
`;

export const Title = styled.Text`
  margin-top: 5px;
  margin-right: 50px;
  color: #fff;
  font-family: 'Girassol-Regular';
  text-align: center;
  font-size: 20px;
`;

export const HeaderActionButtonIcon = styled.Image`
  width: 30px;
  height: 30px;
`;
