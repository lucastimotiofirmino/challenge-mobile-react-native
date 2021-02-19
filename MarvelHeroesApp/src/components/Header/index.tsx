import React from 'react';

import {Container, Image} from './styles';
import Logo from '../../assets/logo.png';

const Header: React.FC = () => {
  return (
    <Container style={{
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.30,
      shadowRadius: 4.65,
      
      elevation: 8,
      backgroundColor: "#FFF"
    }}>
      <Image source={Logo} />
    </Container>
  );
};

export default Header;
