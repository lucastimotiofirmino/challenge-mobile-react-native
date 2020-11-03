import styled from 'styled-components/native';

export const Container = styled.View`
  background: ${({theme}) => theme.colors.background};
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

export const Header = styled.View`
  align-items: center;
  margin: 20px;
`;

export const Logo = styled.Image`
  height: 46px;
  width: 122px;
`;

export const Switch = styled.Switch.attrs(({theme}) => ({
  trackColor: {
    true: theme.colors.text,
    false: theme.colors.text,
  },
  thumbColor: theme.colors.primary,
}))`
  position: absolute;
  right: 10px;
  top: 10px;
`;

export const Content = styled.SafeAreaView`
  background: ${({theme}) => theme.colors.background};
  flex: 1;
  padding: 10px;
`;
