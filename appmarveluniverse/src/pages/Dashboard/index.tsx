/**
 * @description: Panel with all characters of Marvel's universe
 */

// Reacts import
import React, { useEffect, useState } from 'react';
import { Image } from 'react-native';

// Dependencies import

// Assets import
import MarvelLogo from '../../assets/marvelLogo.png';

// Services & utils import
import api from '../../services/api';

// Styles import
import {
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
  const [currentChars, setCurrentChars] = useState([]);
  const [totalChars, setTotalChars] = useState(0);

  const getAllChars = () => {
    return api
      .get('/v1/public/characters', {
        params: {
          limit: 30,
          offset: 0,
        },
      })
      .then(res => {
        setCurrentChars(res.data.data.results);
        setTotalChars(res.data.data.total);
      })
      .catch(err => {
        console.error('@getAllChars', err);
      });
  };

  useEffect(() => {
    getAllChars();
  }, []);

  return (
    <>
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
      <MenuPageTrackerContainer />
      <CharactersScrollContainer
        data={currentChars}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <CharacterContainer>
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
      />
    </>
  );
};

export default Dashboard;
