/**
 * @description: Splashscreen of Marvel's Universe App
 */

// Reacts import
import React, { useEffect } from 'react';
import { Animated } from 'react-native';

// Dependencies import
import { useNavigation, useIsFocused } from '@react-navigation/native';

// Assets import
import BkgImage from '../../assets/bkgNet.png';
import marvelLogo from '../../assets/marvelLogo.png';

import {
  Container,
  ImageBkg,
  FooterNote,
  LogoContainer,
  LogoImg,
  SubTitle,
} from './styles';

const Splashscreen: React.FC = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const forFade = ({ current, next }) => {
    const opacity = Animated.add(
      current.progress,
      next ? next.progress : 0,
    ).interpolate({
      inputRange: [0, 1, 2],
      outputRange: [0, 1, 0],
    });

    return {
      leftButtonStyle: { opacity },
      rightButtonStyle: { opacity },
      titleStyle: { opacity },
      backgroundStyle: { opacity },
    };
  };

  const MoveScreen = () => {
    setTimeout(() => {
      navigation.navigate('AppStack', { screen: 'Characters' });
    }, 3000);
  };

  useEffect(() => {
    if (isFocused) MoveScreen();
  }, [isFocused]);

  return (
    <Container>
      <ImageBkg source={BkgImage}>
        <LogoContainer>
          <LogoImg source={marvelLogo} />
          <SubTitle>Super App de Personagens</SubTitle>
        </LogoContainer>
        <FooterNote>Data provided by Marvel. &copy; 2021 MARVEL</FooterNote>
      </ImageBkg>
    </Container>
  );
};

export default Splashscreen;
