import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 100%;
`;

export const ImageBkg = styled.ImageBackground.attrs({
  resizeMode: 'cover',
})`
  flex: 1;
  width: 100%;
  height: 100%;
`;

export const FooterNote = styled.Text`
  position: absolute;
  font-size: 12px;
  font-family: 'Marvel-Bold';
  color: #fff;
  align-self: center;
  bottom: 20px;
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
  font-size: 25px;
  font-family: 'Marvel-Bold';
  color: #fff;
`;

export const InputLabel = styled.Text`
  font-size: 24px;
  font-family: 'Marvel-Bold';
  color: #444;
`;
