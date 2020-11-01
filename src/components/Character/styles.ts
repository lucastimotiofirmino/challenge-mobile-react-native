import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  background: ${({theme}) => theme.colors.characterBackground};
  flex-grow: 1;
  flex-basis: 0;
  margin: 5px;
  padding: 5px;
  min-height: 150px;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.primary}
  height: 40px;
  padding: 10px 5px;
  justify-content: center;
  text-align: center;
`;

export const Image = styled.Image`
  flex: 1;
  width: 100%;
`;
