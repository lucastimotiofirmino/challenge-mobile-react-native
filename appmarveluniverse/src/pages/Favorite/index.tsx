/**
 * @description: Panel with all favorited characters
 */

// Reacts import
import React, { useState, useEffect } from 'react';
import {} from 'react-native';

// Dependencies import
import AsyncStorage from '@react-native-async-storage/async-storage';
import IonIcons from 'react-native-vector-icons/Ionicons';
import { useIsFocused } from '@react-navigation/native';

// Assets import
import MarvelLogo from '../../assets/marvelLogo.png';

// Services & utils import
import api from '../../services/api';

// Styles import
import {
  Container,
  ItemRow,
  HeaderContainer,
  HeaderLeftElem,
  HeaderCenterElem,
  HeaderRightElem,
  HeaderTitle,
  HeaderImage,
  CharactersScrollContainer,
  CharacterContainer,
  CharacterImageContainer,
  CharacterThumbnail,
  CharacterResumeInfoContainer,
  CharacterNameInfo,
  FavoriteCharContainer,
} from './styles';

const Favorited: React.FC = () => {
  const [persistentFavChar, setPersistentFavChar] = useState({});
  const [resFavedCharDetails, setResFavedCharDetails] = useState([]);
  const [allCharsFavoritedDetails, setAllCharsFavoritedDetails] = useState([]);

  const isFocused = useIsFocused();

  /**  Functions  * */

  // Get all characters favorited in localStorage
  const getFavoritedChars = async () => {
    try {
      const charsStored = await AsyncStorage.getItem(
        '@MarvelSuperApp:FavoritedChar',
      ).then(req => JSON.parse(req));
      if (charsStored !== null) {
        setPersistentFavChar(charsStored);
      }
    } catch (err) {
      throw new Error('No character favorited');
    }
  };

  // Get all favorited char details
  const getFavedCharDetails = async (characterId: string) => {
    return api
      .get(`/v1/public/characters/${characterId}`, {
        params: {},
      })
      .then(res => {
        if (res.data.code === 200) {
          setResFavedCharDetails(resFavedCharDetails => [
            ...resFavedCharDetails,
            ...res.data.data.results,
          ]);
        }
      })
      .catch(err => {
        console.error('@getFavedCharDetails', err);
      });
  };

  // Favorite a character
  const favoriteChar = async (characterId: string): Promise<void> => {
    let prevFavs = await AsyncStorage.getItem('@MarvelSuperApp:FavoritedChar')
      .then(req => JSON.parse(req))
      .catch(error => console.error(error));

    // Check if there's an array storage on device if not created
    if (prevFavs === null) {
      prevFavs = [];
      await AsyncStorage.setItem(
        '@MarvelSuperApp:FavoritedChar',
        JSON.stringify(prevFavs),
      );
    }

    // Insert or remove item from persistent array
    if (prevFavs.findIndex(el => el === characterId) === -1) {
      prevFavs.push(characterId);
    } else {
      prevFavs.splice(
        prevFavs.findIndex(el => el === characterId),
        1,
      );
    }

    // Record storage and update favorite character list
    await AsyncStorage.setItem(
      '@MarvelSuperApp:FavoritedChar',
      JSON.stringify(prevFavs),
    ).finally(() => {
      setAllCharsFavoritedDetails(
        allCharsFavoritedDetails.filter(item => item.id !== characterId),
      );
    });
  };

  // Check if character is favorited
  const checkFavoriteChar = (characterId: string): boolean => {
    if (persistentFavChar) {
      if (
        Object.keys(persistentFavChar).length > 0 &&
        persistentFavChar.find(item => item.toString() === characterId)
      ) {
        return true;
      }
      return false;
    }
  };

  useEffect(() => {
    if (isFocused) getFavoritedChars();
    if (!isFocused) {
      setResFavedCharDetails([]);
      setAllCharsFavoritedDetails([]);
    }
  }, [isFocused]);

  useEffect(() => {
    if (Object.keys(persistentFavChar).length > 0) {
      persistentFavChar.map(item => getFavedCharDetails(item));
    }
  }, [persistentFavChar]);

  useEffect(() => {
    let unique = [];
    unique = [...new Set(resFavedCharDetails.map(o => JSON.stringify(o)))].map(
      string => JSON.parse(string),
    );
    setAllCharsFavoritedDetails(unique);
  }, [resFavedCharDetails]);

  return (
    <Container>
      <HeaderContainer>
        <HeaderLeftElem />
        <HeaderCenterElem>
          <HeaderImage source={MarvelLogo} />
          <HeaderTitle>Personagens Favoritos</HeaderTitle>
        </HeaderCenterElem>
        <HeaderRightElem />
      </HeaderContainer>
      <CharactersScrollContainer
        data={allCharsFavoritedDetails}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <CharacterContainer>
            <CharacterImageContainer>
              <FavoriteCharContainer
                onPress={() => {
                  favoriteChar(item.id);
                }}
              >
                <IonIcons
                  name={
                    checkFavoriteChar(item.id.toString())
                      ? `md-heart`
                      : `md-heart-outline`
                  }
                  size={20}
                  color="#71090d"
                />
              </FavoriteCharContainer>

              <CharacterThumbnail
                source={{
                  uri: `${item.thumbnail.path.replace(
                    'http',
                    'https',
                  )}/portrait_xlarge.${item.thumbnail.extension}`,
                }}
              />
            </CharacterImageContainer>
            <CharacterResumeInfoContainer>
              <ItemRow>
                <CharacterNameInfo numberOfLines={2}>
                  {item.name}
                </CharacterNameInfo>
              </ItemRow>
            </CharacterResumeInfoContainer>
          </CharacterContainer>
        )}
        numColumns={3}
      />
    </Container>
  );
};

export default Favorited;
