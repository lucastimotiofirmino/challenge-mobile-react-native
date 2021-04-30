import React from 'react';
import { Image } from 'react-native';
import { Container, Content, ContentImage } from './styles';
import AppBarLogo from '../../assets/App_Bar_Logo.png';
import AppBarMenuIcon from '../../assets/App_Bar_Menu_Icon.png';

const Header = (): JSX.Element => {
  return (
    <Container>
      <Content>
        <ContentImage>
          <Image source={AppBarMenuIcon} />

          <Image source={AppBarLogo} />
        </ContentImage>
      </Content>
    </Container>
  );
};

export default Header;
