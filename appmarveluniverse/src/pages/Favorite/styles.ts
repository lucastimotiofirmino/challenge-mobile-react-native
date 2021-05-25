import styled from 'styled-components/native';

export const Container = styled.View``;

// Header Page
export const HeaderContainer = styled.View`
  width: 100%;
  height: 50px;
  margin-top: 50px;
  flex-direction: row;
`;

export const HeaderLeftElem = styled.View`
  flex-basis: 15%;
  align-items: flex-start;
  justify-content: center;
`;

export const HeaderCenterElem = styled.View`
  flex-basis: 70%;
  align-items: center;
  justify-content: center;
`;

export const HeaderRightElem = styled.View`
  flex-basis: 15%;
`;

export const HeaderImage = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 100%;
  height: 60%;
`;

export const HeaderTitle = styled.Text`
  font-family: 'Marvel-Bold';
  color: #fff;
  font-size: 18px;
`;

export const HeaderBackButton = styled.TouchableOpacity`
  margin-left: 30%;
`;
