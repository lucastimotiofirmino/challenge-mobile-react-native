import styled from 'styled-components/native';

export const Container = styled.View`
  background: ${({theme}) => theme.colors.background};
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

export const Header = styled.View`
  align-items: center;
  padding: 20px;
`;

export const Logo = styled.Image`
  height: 62px;
  width: 163px;
`;

export const Content = styled.View`
  flex: 1;
  padding: 5px;
`;
