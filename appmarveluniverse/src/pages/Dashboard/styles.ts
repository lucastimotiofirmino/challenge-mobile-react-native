import styled from 'styled-components/native';

export const Container = styled.View``;

// Header Page
export const HeaderContainer = styled.View`
  width: 100%;
  height: 42px;
  margin-top: 14%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const HeaderLeftElem = styled.View`
  flex-grow: 1;
`;

export const HeaderCenterElem = styled.View`
  flex-grow: 2;
`;

export const HeaderRightElem = styled.View`
  flex-grow: 1;
`;

export const HeaderImage = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 100%;
  height: 80%;
`;

export const HeaderTitle = styled.Text`
  font-family: 'Marvel-Bold';
  color: #fff;
  font-size: 18px;
`;

export const HeaderBackButton = styled.TouchableOpacity`
  width: 42px;
  height: 42px;
  position: absolute;
  left: 15px;
  top: 0px;
`;
