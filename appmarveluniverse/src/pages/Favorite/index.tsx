/**
 * @description: Panel with all favorited characters
 */

// Reacts import
import React from 'react';
import { View } from 'react-native';

// Assets import
import MarvelLogo from '../../assets/marvelLogo.png';

// Styles import
import {
  HeaderContainer,
  HeaderLeftElem,
  HeaderCenterElem,
  HeaderRightElem,
  HeaderTitle,
  HeaderImage,
} from './styles';

const Favorited: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderLeftElem>
        {/* <HeaderBackButton onPress={() => {}}>
        <ADIcons name="leftcircleo" size={30} color="#ed1d24" />
      </HeaderBackButton> */}
      </HeaderLeftElem>
      <HeaderCenterElem>
        <HeaderImage source={MarvelLogo} />
        <HeaderTitle>Personagens Favoritos</HeaderTitle>
      </HeaderCenterElem>
      <HeaderRightElem />
    </HeaderContainer>
  );
};

export default Favorited;
