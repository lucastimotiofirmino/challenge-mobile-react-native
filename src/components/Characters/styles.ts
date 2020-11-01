import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

export const Header = styled.View`
  align-items: center;
  padding: 20px;
  background: ${({theme}) => theme.colors.headerBackground};
`;

export const Content = styled.View`
  flex: 1;
  background: ${({theme}) => theme.colors.contentBackground};
`;

export const Logo = styled.Image`
  width: 163px;
  height: 62px;
`;
