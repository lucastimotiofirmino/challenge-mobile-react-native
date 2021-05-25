import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 100%;
`;

export const ItemRow = styled.View`
  flex-direction: row;
  justify-content: center;
`;

export const LogoContainer = styled.View`
  align-items: center;
  margin: 20%;
  height: 15%;
`;

export const LogoImg = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 100%;
  height: 100%;
`;

export const SubTitle = styled.Text`
  font-size: 24px;
  font-family: 'Marvel-Regular';
  color: #fff;
`;

export const InputLabel = styled.Text`
  font-size: 24px;
  font-family: 'Marvel-Bold';
  color: #444;
`;
