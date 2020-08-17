import React from 'react';
import { ImageBackground } from 'react-native';

import { connect } from 'react-redux';

import {
  getMyFavorites,
  getCharactersData,
} from '../../store/reducers/character';

import styles from './styles';

const Favorites = () => {
  return (
    <ImageBackground
      style={styles.hw100}
      source={require('../../assets/background.jpg')}
    />
  );
};

const mapStateToProps = (state: any) => ({
  favorites: getMyFavorites(state),
  characters: getCharactersData(state),
});

export default connect(mapStateToProps, null)(Favorites);
