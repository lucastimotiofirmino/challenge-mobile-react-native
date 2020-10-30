import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  padding: 20px;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.primary};
`;
