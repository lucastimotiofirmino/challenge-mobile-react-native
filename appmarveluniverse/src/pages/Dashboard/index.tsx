/**
 * @description: Panel with all characters of Marvel's universe
 */

// Reacts import
import React, { useEffect, useState } from 'react';
import { Modal, Alert, ScrollView, Text } from 'react-native';

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
  ModalSectionHorizontalScroll,
  ModalComicContainer,
  ModalCharComicsTotal,
  ModalComicCoverImage,
  ModalComicTitle,
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
  const [allCharsOffset, setAllCharsOffset] = useState(0);
  const [charDetails, setCharDetails] = useState({});
  const [allCharComicsResults, setAllCharComicsResults] = useState([]);
  const [allCharComicsData, setAllCharComicsData] = useState([]);
  const [allCharComicsOffset, setAllCharComicsOffset] = useState(0);

  /**  Functions  * */
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

  const getAllCharComics = async (characterId: string): Promise<void> => {
    console.log('allCharComicsOffset', allCharComicsOffset);
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
    }
  }, [charDetails]);

  useEffect(() => {
    if (resetStates) {
      setAllCharComicsOffset(0);
      setAllCharComicsResults([]);
      setAllCharComicsData([]);
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
              {Object.keys(allCharComicsData).length > 0 && (
                <>
                  <ModalSectionTitle>
                    Aparição nos Quadrinhos
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
                            )}/portrait_fantastic.${item.thumbnail.extension}`,
                          }}
                        />
                      </ModalComicContainer>
                    )}
                    onEndReachedThreshold={0.3}
                    onEndReached={() => {
                      if (allCharComicsOffset < allCharComicsData.data.total) {
                        setAllCharComicsOffset(allCharComicsOffset + 30);
                      }
                    }}
                  />
                </>
              )}
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
