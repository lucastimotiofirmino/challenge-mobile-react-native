import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  margin-bottom: 10px;
`;

export const Loading = styled.TouchableOpacity`
  background: ${({theme}) => theme.colors.characterBackground};
  flex-grow: 1;
  flex-basis: 0;
  margin: 5px;
  padding: 5px;
  height: 150px;
  justify-content: center;
  align-items: center;
`;

export const Indicator = styled.ActivityIndicator.attrs(({theme}) => ({
  color: theme.colors.primary,
}))``;
