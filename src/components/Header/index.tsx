import React from 'react';
import {Image} from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import imgLogo from '../../assets/marvel_logo.png';

import {Container} from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Image style={{width: 110, height: 40}} source={imgLogo} />
    </Container>
  );
};

export default Header;
