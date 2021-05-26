import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

import IonIcons from 'react-native-vector-icons/Ionicons';

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

// Modal basic elements
export const ModalContainer = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  align-items: center;
`;

export const ModalView = styled.View`
  width: 90%;
  height: 80%;
  align-self: center;
  border-radius: 10px;
  background-color: #fff;
  margin-top: 15%;
`;

export const ModalButton = styled.TouchableOpacity`
  position: absolute;
  width: 30px;
  height: 30px;
  justify-content: center;
  z-index: 10;
  align-self: flex-end;
  margin: 5px;
`;

export const ModalButtonIcon = styled(IonIcons)`
  position: absolute;
  border-radius: 20px;
`;

// Modal Character Elements
export const ModalCover = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: 100%;
  height: ${height * 0.25}px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  opacity: 0.6;
`;

export const ModalCharName = styled.Text`
  font-family: 'Marvel-Bold';
  color: #000;
  font-size: 28px;
  margin-left: 5px;
`;

export const ModalSectionTitle = styled.Text`
  font-family: 'Marvel-Bold';
  color: #000;
  font-size: 20px;
  margin-left: 5px;
`;

export const ModalCharDescriptionContainer = styled.ScrollView`
  max-height: ${height * 0.1}px;
  margin-left: 5px;
`;

export const ModalCharDescriptionText = styled.Text`
  font-family: 'Marvel-Regular';
  color: #000;
  font-size: 14px;
`;

export const ModalDetailsScroll = styled.ScrollView`
  flex: 1;
  flex-grow: 1;
  width: 100%;
  height: 100%;
`;

export const ModalSectionHorizontalScroll = styled.FlatList.attrs({
  horizontal: true,
  contentContainerStyle: { alignItems: 'center' },
})`
  min-height: ${height * 0.1}px;
  max-height: ${height * 0.1}px;
  margin-bottom: 10px;
`;

// Modal Character Comics
export const ModalCharComicsTotal = styled.Text`
  font-family: 'Marvel-Regular';
  color: #000;
  font-size: 12px;
`;

export const ModalComicContainer = styled.View`
  width: ${width * 0.11}px;
  height: ${width * 0.11 * 1.4}px;
  margin: 5px 5px 0px;
  background-color: #fff;
`;

export const ModalComicCoverImage = styled.Image`
  width: 100%;
  height: 100%;
`;

export const ModalComicTitle = styled.Text``;

// Modal Character Graphs data
export const ModalCharGraphsContainer = styled.View`
  width: 100%;
  height: ${height * 0.21}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 10px;
`;

export const ModalCharGraphElement = styled.View`
  width: ${width * 0.3}px;
  height: ${width * 0.3 * 1.3}px;
  align-items: center;
`;

export const ModalCharGraphPic = styled.TouchableOpacity`
  width: ${width * 0.25}px;
  height: ${width * 0.25}px;
`;

export const ModalCharGraphData = styled.Text``;

export const ModalCharGraphInfo = styled.Text`
  flex-grow: 1;
  width: 100%;
  font-family: 'Marvel-Bold';
  color: #1f1f1f;
  font-size: 15px;
  text-align: center;
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

// Menu page tracker
export const MenuPageTrackerContainer = styled.View`
  width: 100%;
  height: 30px;
  background-color: #fff;
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

export const CharacterResumeInfo = styled.Text`
  flex-basis: 95%;
  font-family: 'Marvel-Regular';
  color: #fff;
  font-size: 13px;
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
