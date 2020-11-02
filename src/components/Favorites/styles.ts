import styled from 'styled-components/native';

export const Container = styled.View`
  background: ${({theme}) => theme.colors.background};
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 20px 10px 0;
`;

export const Header = styled.View`
  align-items: center;
  margin-bottom: 20px;
`;

export const Logo = styled.Image`
  height: 46px;
  width: 122px;
`;

export const Empty = styled.Text`
  color: ${({theme}) => theme.colors.primary};
  text-align: center;
`;
