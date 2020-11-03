import styled from 'styled-components/native';

export const Input = styled.TextInput.attrs(({theme}) => ({
  placeholderTextColor: theme.colors.text,
}))`
  background: ${({theme}) => theme.colors.characterBackground};
  color: ${({theme}) => theme.colors.primary};
  margin: 10px 5px;
  padding: 10px;
`;

export const Empty = styled.Text`
  color: ${({theme}) => theme.colors.primary};
  text-align: center;
`;

export const Loading = styled.ActivityIndicator.attrs(({theme}) => ({
  color: theme.colors.primary,
}))``;
