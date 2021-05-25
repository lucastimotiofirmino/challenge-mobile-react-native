/**
 * @description: Panel with all characters of Marvel's universe
 */

// Reacts import
import React, { useEffect, useState } from 'react';
import { Modal } from 'react-native';

// Dependencies import

// Assets import
import MarvelLogo from '../../assets/marvelLogo.png';

// Services & utils import
import api from '../../services/api';

// Styles import
import {
  Container,
  ModalContainer,
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
  ModalComicTitle,
  ModalCharGraphsContainer,
  ModalCharGraphElement,
  ModalCharGraphPic,
  ModalCharGraphData,
  ModalCharGraphInfo,
  ItemRow,
  HeaderContainer,
  HeaderLeftElem,
  HeaderCenterElem,
  HeaderRightElem,
  HeaderTitle,
  HeaderImage,
  MenuPageTrackerContainer,
  CharactersScrollContainer,
  CharacterContainer,
  CharacterImageContainer,
  CharacterThumbnail,
  CharacterResumeInfoContainer,
  CharacterNameInfo,
} from './styles';

const Dashboard: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [resetStates, setResetStates] = useState(false);
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

  /**  Functions  * */

  // Get all character from Marvel's universe
  const getAllChars = async () => {
    return api
      .get('/v1/public/characters', {
        params: {
          limit: 30,
          offset: allCharsOffset,
          orderBy: 'name',
        },
      })
      .then(res => {
        if (res.data.code === 200) {
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

  useEffect(() => {
    getAllChars();
  }, []);

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

  return (
    <Container>
      {Object.keys(charDetails).length > 0 ? (
        <Modal
          animationType="fade"
          transparent
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <ModalContainer>
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
              <ModalDetailsScroll>
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
                  Alguns dados do personagem
                </ModalSectionTitle>
                <ModalCharGraphsContainer>
                  <ModalCharGraphElement>
                    <ModalCharGraphPic />
                    <ModalCharGraphInfo />
                  </ModalCharGraphElement>
                  <ModalCharGraphElement>
                    <ModalCharGraphPic />
                    <ModalCharGraphInfo />
                  </ModalCharGraphElement>
                </ModalCharGraphsContainer>
              </ModalDetailsScroll>
            </ModalView>
          </ModalContainer>
        </Modal>
      ) : null}
      <HeaderContainer>
        <HeaderLeftElem>
          {/* <HeaderBackButton onPress={() => {}}>
            <ADIcons name="leftcircleo" size={30} color="#ed1d24" />
          </HeaderBackButton> */}
        </HeaderLeftElem>
        <HeaderCenterElem>
          <HeaderImage source={MarvelLogo} />
          <HeaderTitle>Painel de Personagens</HeaderTitle>
        </HeaderCenterElem>
        <HeaderRightElem />
      </HeaderContainer>
      <CharactersScrollContainer
        data={allCharsResults}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <CharacterContainer onPress={() => handleCharDetails(item.id)}>
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
