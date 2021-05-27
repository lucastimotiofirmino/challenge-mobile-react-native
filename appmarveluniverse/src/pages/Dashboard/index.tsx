/**
 * @description: Panel with all characters of Marvel's universe
 */

// Reacts import
import React, { useEffect, useState } from 'react';
import { Modal, Keyboard, ActivityIndicator, Alert } from 'react-native';

// Dependencies import
import AsyncStorage from '@react-native-async-storage/async-storage';
import IonIcons from 'react-native-vector-icons/Ionicons';
import { useIsFocused } from '@react-navigation/native';

// Components import
import DonutChart from '../../components/DonutChart';

// Assets import
import MarvelLogo from '../../assets/marvelLogo.png';

// Services & utils import
import api from '../../services/api';

// Styles import
import {
  Container,
  ItemRow,
  ModalView,
  ModalButton,
  ModalButtonIcon,
  ModalCover,
  ModalCharName,
  ModalSectionTitle,
  ModalCharDescriptionContainer,
  ModalCharDescriptionText,
  ModalDetailsScroll,
  ModalSectionHorizontalScroll,
  ModalComicContainer,
  ModalCharComicsTotal,
  ModalComicCoverImage,
  ModalCharGraphsContainer,
  ModalCharGraphElement,
  ModalCharGraphPic,
  ModalCharGraphInfo,
  HeaderContainer,
  HeaderLeftElem,
  HeaderCenterElem,
  HeaderRightElem,
  HeaderTitle,
  HeaderImage,
  FilterResultsContainer,
  FilterResultsIcon,
  ModalBackground,
  SearchContainer,
  SearchInput,
  SearchButton,
  SearchIcon,
  CharactersScrollContainer,
  CharacterContainer,
  CharacterImageContainer,
  CharacterThumbnail,
  CharacterResumeInfoContainer,
  CharacterNameInfo,
  FavoriteCharContainer,
} from './styles';

// Interfaces definition
interface IScrollCloseBottom {
  layoutMeasurement: string;
  contentOffset: string;
  contentSize: string;
}

// Scrollview Watch Position
const isCloseToBottom = ({
  layoutMeasurement,
  contentOffset,
  contentSize,
}: IScrollCloseBottom) => {
  const paddingToBottom = 20;
  return (
    layoutMeasurement.height + contentOffset.y >=
    contentSize.height - paddingToBottom
  );
};

const Dashboard: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [resetStates, setResetStates] = useState(false);
  const [startAnimation, setStartAnimation] = useState(false);
  const [charNameText, setCharNameText] = useState('');
  const [persistentFavChar, setPersistentFavChar] = useState({});
  const [allCharsResults, setAllCharsResults] = useState([]);
  const [allCharsData, setAllCharsData] = useState([]);
  const [charDetails, setCharDetails] = useState({});
  const [allCharsOffset, setAllCharsOffset] = useState(0);
  const [allCharComicsResults, setAllCharComicsResults] = useState([]);
  const [allCharComicsData, setAllCharComicsData] = useState([]);
  const [allCharComicsOffset, setAllCharComicsOffset] = useState(0);
  const [allCharSeriesResults, setAllCharSeriesResults] = useState([]);
  const [allCharSeriesData, setAllCharSeriesData] = useState([]);
  const [allCharSeriesOffset, setAllCharSeriesOffset] = useState(0);
  const [allCharStoriesResults, setAllCharStoriesResults] = useState([]);
  const [allCharStoriesData, setAllCharStoriesData] = useState([]);
  const [allCharEventsResults, setAllCharEventsResults] = useState([]);
  const [allCharEventsData, setAllCharEventsData] = useState([]);

  const isFocused = useIsFocused();

  /**  Functions  * */

  // Get all character from Marvel's universe
  const getAllChars = async (param?: string) => {
    console.log('param', param);
    return api
      .get('/v1/public/characters', {
        params: {
          limit: 30,
          offset: allCharsOffset,
          orderBy: param ? param.sort : 'name',
          ...(charNameText.trim() !== ''
            ? { nameStartsWith: charNameText }
            : {}),
        },
      })
      .then(res => {
        if (res.data.code === 200) {
          // res.data.data.results.map(item => console.log(item.name));
          setAllCharsData(res.data);
          const responseData = [...allCharsResults, ...res.data.data.results];
          const unique = [
            ...new Set(responseData.map(o => JSON.stringify(o))),
          ].map(string => JSON.parse(string));
          setAllCharsResults(unique);
        }
      })
      .catch(err => {
        console.error('@getAllChars', err);
      });
  };

  // Get all details of selected character
  const handleCharDetails = async (characterId: string): Promise<void> => {
    return api
      .get(`/v1/public/characters/${characterId}`, { params: {} })
      .then(res => {
        if (res.data.code === 200) {
          setCharDetails(res.data.data);
        }
      })
      .catch(err => {
        console.error('@handleCharDetails', err);
      });
  };

  // Get all Comics appearances of selected character
  const getAllCharComics = async (characterId: string): Promise<void> => {
    return api
      .get(`/v1/public/characters/${characterId}/comics`, {
        params: {
          limit: 30,
          offset: allCharComicsOffset,
          orderBy: 'focDate',
        },
      })
      .then(res => {
        if (res.data.code === 200) {
          setAllCharComicsData(res.data);
          const responseData = [
            ...allCharComicsResults,
            ...res.data.data.results,
          ];
          const unique = [
            ...new Set(responseData.map(o => JSON.stringify(o))),
          ].map(string => JSON.parse(string));
          setAllCharComicsResults(unique);
        }
      })
      .catch(err => {
        console.error('@getAllCharComics', err);
      });
  };

  // Get all Comics series appearances of selected character
  const getAllCharSeries = async (characterId: string): Promise<void> => {
    return api
      .get(`/v1/public/characters/${characterId}/series`, {
        params: {
          limit: 30,
          offset: allCharSeriesOffset,
          orderBy: 'startYear',
        },
      })
      .then(res => {
        if (res.data.code === 200) {
          setAllCharSeriesData(res.data);
          const responseData = [
            ...allCharSeriesResults,
            ...res.data.data.results,
          ];
          const unique = [
            ...new Set(responseData.map(o => JSON.stringify(o))),
          ].map(string => JSON.parse(string));
          setAllCharSeriesResults(unique);
        }
      })
      .catch(err => {
        console.error('@getAllCharSeries', err);
      });
  };

  // Get selected character all appearances in Stories
  const getAllCharStories = async (characterId: string): Promise<void> => {
    return api
      .get(`/v1/public/characters/${characterId}/stories`, {
        params: {
          limit: 100,
          orderBy: 'id',
        },
      })
      .then(res => {
        if (res.data.code === 200) {
          setAllCharStoriesData(res.data);
          const responseData = [
            ...allCharStoriesResults,
            ...res.data.data.results,
          ];
          const unique = [
            ...new Set(responseData.map(o => JSON.stringify(o))),
          ].map(string => JSON.parse(string));
          setAllCharStoriesResults(unique);
        }
      })
      .catch(err => {
        console.error('@getAllCharStories', err);
      });
  };

  // Get selected character all appearances in Events
  const getAllCharEvents = async (characterId: string): Promise<void> => {
    return api
      .get(`/v1/public/characters/${characterId}/events`, {
        params: {
          limit: 100,
          orderBy: 'startDate',
        },
      })
      .then(res => {
        if (res.data.code === 200) {
          setAllCharEventsData(res.data);
          const responseData = [
            ...allCharEventsResults,
            ...res.data.data.results,
          ];
          const unique = [
            ...new Set(responseData.map(o => JSON.stringify(o))),
          ].map(string => JSON.parse(string));
          setAllCharEventsResults(unique);
        }
      })
      .catch(err => {
        console.error('@getAllCharEvents', err);
      });
  };

  // Get All characters favorited
  const getFavoriteChar = async () => {
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

    // Insert or remove item from array
    if (prevFavs.findIndex(el => el === characterId) === -1) {
      prevFavs.push(characterId);
    } else {
      prevFavs.splice(
        prevFavs.findIndex(el => el === characterId),
        1,
      );
    }

    // Record storage
    await AsyncStorage.setItem(
      '@MarvelSuperApp:FavoritedChar',
      JSON.stringify(prevFavs),
    );

    getFavoriteChar();
  };

  // Check if character is favorited
  const checkFavoriteChar = (characterId: string): boolean | undefined => {
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

  // Get character by name
  const getCharacterByName = (): void => {
    setAllCharsResults([]);
    setAllCharsOffset(0);
    Keyboard.dismiss();
  };

  // // Order character list
  // const getCharacterNameOrder = (param: string): void => {
  //   setAllCharsResults([]);
  //   setAllCharsOffset(0);
  //   if (allCharsResults.length === 0 && allCharsOffset === 0) {
  //     getAllChars();
  //   }

  // };

  useEffect(() => {
    getAllChars();
    getFavoriteChar();
  }, []);

  useEffect(() => {
    if (isFocused) {
      getAllChars();
      getFavoriteChar();
    }
  }, [isFocused]);

  useEffect(() => {
    getAllChars();
  }, [allCharsOffset]);

  useEffect(() => {
    if (Object.keys(charDetails).length > 0) {
      getAllCharComics(charDetails.results[0].id);
    }
  }, [allCharComicsOffset]);

  useEffect(() => {
    setModalVisible(true);
    if (Object.keys(charDetails).length > 0) {
      getAllCharComics(charDetails.results[0].id);
      getAllCharSeries(charDetails.results[0].id);
      getAllCharStories(charDetails.results[0].id);
      getAllCharEvents(charDetails.results[0].id);
    }
  }, [charDetails]);

  useEffect(() => {
    if (allCharsResults.length === 0 && allCharsOffset === 0) {
      getAllChars();
    }
  }, [allCharsResults, allCharsOffset]);

  useEffect(() => {
    if (resetStates) {
      setAllCharComicsOffset(0);
      setAllCharComicsResults([]);
      setAllCharComicsData([]);
      setAllCharSeriesOffset(0);
      setAllCharSeriesResults([]);
      setAllCharSeriesData([]);
      setAllCharStoriesResults([]);
      setAllCharStoriesData([]);
      setAllCharEventsResults([]);
      setAllCharEventsData([]);
    }
    resetStates && setResetStates(false);
  }, [resetStates]);

  // Donut Graph Data
  const charStoriesData = [
    Object.keys(allCharStoriesData).length > 0 && {
      percentage: allCharStoriesData.data.total,
      color: '#ed1d24',
      max: allCharStoriesData.data.total + 100,
      radius: 50,
      strokeWidth: 13,
    },
  ];

  const charEventsData = [
    Object.keys(allCharEventsData).length > 0 && {
      percentage: allCharEventsData.data.total,
      color: '#ed1d24',
      max: allCharEventsData.data.total + 100,
      radius: 50,
      strokeWidth: 13,
    },
  ];

  return (
    <Container>
      {/* Modal of character details */}
      {Object.keys(charDetails).length > 0 ? (
        <Modal
          animationType="fade"
          transparent
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <ModalBackground>
            <ModalView>
              <ModalButton
                onPress={() => {
                  setModalVisible(false);
                  setResetStates(true);
                }}
              >
                <ModalButtonIcon
                  name="md-close-circle"
                  color="#71090d"
                  size={30}
                />
              </ModalButton>
              <ModalCover
                source={{
                  uri: `${charDetails.results[0].thumbnail.path.replace(
                    'http',
                    'https',
                  )}/landscape_incredible.${
                    charDetails.results[0].thumbnail.extension
                  }`,
                }}
              />
              <ModalCharName>{charDetails.results[0].name}</ModalCharName>
              <ModalSectionTitle>Descrição</ModalSectionTitle>
              <ModalCharDescriptionContainer>
                <ModalCharDescriptionText>
                  {charDetails.results[0].description !== ''
                    ? charDetails.results[0].description
                    : `No description available`}
                </ModalCharDescriptionText>
              </ModalCharDescriptionContainer>
              <ModalDetailsScroll
                onScroll={({ nativeEvent }) => {
                  if (isCloseToBottom(nativeEvent)) {
                    setStartAnimation(true);
                  }
                }}
                scrollEventThrottle={5}
              >
                {/* Comics */}
                {Object.keys(allCharComicsData).length > 0 && (
                  <>
                    <ModalSectionTitle>
                      Aparição nos Quadrinhos{' '}
                      <ModalCharComicsTotal>
                        (Total: {`${allCharComicsData.data.total}`})
                      </ModalCharComicsTotal>
                    </ModalSectionTitle>
                    <ModalSectionHorizontalScroll
                      data={allCharComicsResults}
                      keyExtractor={item => item.id.toString()}
                      renderItem={({ item }) => (
                        <ModalComicContainer>
                          <ModalComicCoverImage
                            source={{
                              uri: `${item.thumbnail.path.replace(
                                'http',
                                'https',
                              )}/portrait_fantastic.${
                                item.thumbnail.extension
                              }`,
                            }}
                          />
                        </ModalComicContainer>
                      )}
                      onEndReachedThreshold={0.3}
                      onEndReached={() => {
                        if (
                          allCharComicsOffset < allCharComicsData.data.total
                        ) {
                          setAllCharComicsOffset(allCharComicsOffset + 30);
                        }
                      }}
                    />
                  </>
                )}
                {/* Series */}
                {Object.keys(allCharSeriesData).length > 0 && (
                  <>
                    <ModalSectionTitle>
                      Aparição nas Séries em Quadrinhos{' '}
                      <ModalCharComicsTotal>
                        (Total: {`${allCharSeriesData.data.total}`})
                      </ModalCharComicsTotal>
                    </ModalSectionTitle>
                    <ModalSectionHorizontalScroll
                      data={allCharSeriesResults}
                      keyExtractor={item => item.id.toString()}
                      renderItem={({ item }) => (
                        <ModalComicContainer>
                          <ModalComicCoverImage
                            source={{
                              uri: `${item.thumbnail.path.replace(
                                'http',
                                'https',
                              )}/portrait_fantastic.${
                                item.thumbnail.extension
                              }`,
                            }}
                          />
                        </ModalComicContainer>
                      )}
                      onEndReachedThreshold={0.3}
                      onEndReached={() => {
                        if (
                          allCharSeriesOffset < allCharSeriesData.data.total
                        ) {
                          setAllCharSeriesOffset(allCharSeriesOffset + 30);
                        }
                      }}
                    />
                  </>
                )}
                {/* Statistical Data */}
                <ModalSectionTitle>
                  Alguns outros dados do personagem
                </ModalSectionTitle>
                <ModalCharGraphsContainer>
                  <ModalCharGraphElement>
                    <ModalCharGraphPic>
                      {charStoriesData.map((p, i) => {
                        return (
                          <DonutChart
                            key={i}
                            percentage={p.percentage}
                            color={p.color}
                            radius={p.radius}
                            delay={500 + 100 * i}
                            max={p.max}
                            strokeWidth={p.strokeWidth}
                            startAnimation={startAnimation}
                          />
                        );
                      })}
                    </ModalCharGraphPic>
                    <ModalCharGraphInfo>
                      Quantidade de histórias que participou
                    </ModalCharGraphInfo>
                  </ModalCharGraphElement>
                  <ModalCharGraphElement>
                    <ModalCharGraphPic>
                      {charEventsData.map((p, i) => {
                        return (
                          <DonutChart
                            key={i}
                            percentage={p.percentage}
                            color={p.color}
                            radius={p.radius}
                            delay={500 + 100 * i}
                            max={p.max}
                            strokeWidth={p.strokeWidth}
                            startAnimation={startAnimation}
                          />
                        );
                      })}
                    </ModalCharGraphPic>
                    <ModalCharGraphInfo>
                      Quantidade de eventos que participou
                    </ModalCharGraphInfo>
                  </ModalCharGraphElement>
                </ModalCharGraphsContainer>
              </ModalDetailsScroll>
            </ModalView>
          </ModalBackground>
        </Modal>
      ) : null}

      <HeaderContainer>
        <HeaderLeftElem />
        <HeaderCenterElem>
          <HeaderImage source={MarvelLogo} />
          <HeaderTitle>Painel de Personagens</HeaderTitle>
        </HeaderCenterElem>
        <HeaderRightElem>
          {/* <FilterResultsContainer
            onPress={() => {
              Alert.alert('Filtro', 'Nome dos personagens', [
                {
                  text: 'A-Z',
                  onPress: () => {
                    getCharacterNameOrder({ sort: 'name' });
                  },
                },
                {
                  text: 'Z-A',
                  onPress: () => {
                    getCharacterNameOrder({ sort: '-name' });
                  },
                },
              ]);
            }}
          >
            <FilterResultsIcon />
          </FilterResultsContainer> */}
        </HeaderRightElem>
      </HeaderContainer>
      <SearchContainer>
        <SearchInput
          onChangeText={text => setCharNameText(text)}
          defaultValue={charNameText}
        />
        <SearchButton onPress={() => getCharacterByName()}>
          <SearchIcon />
        </SearchButton>
      </SearchContainer>
      <CharactersScrollContainer
        data={allCharsResults}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <CharacterContainer onPress={() => handleCharDetails(item.id)}>
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
            <CharacterImageContainer>
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
        onEndReachedThreshold={0.5}
        onEndReached={() => {
          if (allCharsOffset < allCharsData.data.total) {
            setAllCharsOffset(allCharsOffset + 30);
          }
        }}
      />
    </Container>
  );
};

export default Dashboard;
