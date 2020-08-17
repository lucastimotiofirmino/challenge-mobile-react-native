import React from 'react';
import { Text, ImageBackground } from 'react-native';

import styles from './styles';

const Favorites = () => {
  return (
    <ImageBackground
      style={styles.hw100}
      source={require('../../assets/background.jpg')}
    >
      <Text>Favorites</Text>
    </ImageBackground>
  );
};

export default Favorites;
