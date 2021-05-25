/**
 * @description: Panel with all characters of Marvel's universe
 */

// Reacts import
import React, { useEffect } from 'react';
import { Image } from 'react-native';

// Assets import
import MarvelLogo from '../../assets/marvelLogo.png';

// Services & utils import
import api from '../../services/api';

// Styles import
import {
  HeaderContainer,
  HeaderLeftElem,
  HeaderCenterElem,
  HeaderRightElem,
  HeaderTitle,
  HeaderImage,
  HeaderBackButton,
} from './styles';

const Dashboard: React.FC = () => {
  const getAllChars = () => {
    return api
      .get(`/characters`)
      .then(res => {
        console.log(res.data.data.total);
      })
      .catch(err => {
        console.error('@getAllChars', err);
      });
  };

  useEffect(() => {
    getAllChars();
  }, []);

  return (
    <HeaderContainer>
      <HeaderLeftElem>
        <HeaderBackButton
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Image source={BackButton} />
        </HeaderBackButton>
      </HeaderLeftElem>
      <HeaderCenterElem>
        <HeaderImage source={MarvelLogo} />
        <HeaderTitle>Painel dos Personagens</HeaderTitle>
      </HeaderCenterElem>
    </HeaderContainer>
  );
};

export default Dashboard;
