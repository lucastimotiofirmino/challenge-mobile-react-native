import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('screen');

export const Container = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
`;

export const ItemRow = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

// Activity Cover
export const ActivityCoverView = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  background-color: #000;
  justify-content: center;
  align-items: center;
`;

export const ActivityIndicator = styled.ActivityIndicator.attrs({
  size: 'large',
  color: '#71090d',
})``;

export const ActivityIndicatorText = styled.Text`
  font-family: 'Marvel-Bold';
  color: #71090d;
  font-size: 16px;
`;

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

// Character's list
export const CharactersScrollContainer = styled.FlatList.attrs({
  alignItems: 'center',
})``;

export const CharacterContainer = styled.TouchableOpacity`
  width: ${width / 3.5}px;
  height: ${height / 5}px;
  border-radius: 10px;
  border-color: #71090d;
  border-width: 0.5px;
  margin: 5px;
`;

export const CharacterImageContainer = styled.View`
  width: 100%;
`;

export const CharacterThumbnail = styled.Image.attrs({})`
  flex-grow: 1;
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

export const CharacterResumeInfoContainer = styled.View`
  flex-grow: 2;
  width: 100%;
  height: 30%;
  background-color: rgba(237, 29, 36, 0.85);
  top: -30%;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const CharacterNameInfo = styled.Text`
  flex-basis: 95%;
  font-family: 'Marvel-Bold';
  color: #fff;
  font-size: 16px;
  text-align: center;
`;

export const FavoriteCharContainer = styled.TouchableOpacity`
  position: absolute;
  align-self: flex-end;
  right: 3px;
  top: 3px;
  width: ${width * 0.05}px;
  height: ${width * 0.05}px;
  z-index: 10;
`;
