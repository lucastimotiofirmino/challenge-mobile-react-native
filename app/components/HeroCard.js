import React, { memo } from 'react';

import {
  StyleSheet,
  Image,
  TouchableNativeFeedback,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { addHeroFavorite, removeHeroFavorite } from '../actions/favorite';
import Icon from 'react-native-vector-icons/AntDesign';

const { width } = Dimensions.get('screen');

export const CARD_HEIGHT = 300; // utilized by the FlatList for optimization

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    marginHorizontal: 5,
    backgroundColor: '#ededed',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 0.5,
    elevation: 2,
  },
  name: {
    maxWidth: 140,
    marginVertical: 20,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: 'center',
  },
  photo: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: width / 2 - 20,
    height: 180,
  },
  modalOpenContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 9,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    borderRadius: 20,
    padding: 8,
  },
  modalOpenIcon: {
    color: '#fff',
    fontSize: 18,
  },
  actionButton: {
    backgroundColor: '#FAA367',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  actionText: {
    color: '#333',
    marginLeft: 8,
  },
});

const HeroCard = ({ ...hero }) => {
  const { name, avatar, favorite } = hero;
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleFavorite = () => {
    if (!favorite) {
      dispatch(addHeroFavorite({ hero }));
      return;
    }

    dispatch(removeHeroFavorite({ hero }));
  };

  const card = (
    <View style={styles.card}>
      <View style={styles.modalOpenContainer}>
        <Icon name="arrowsalt" style={styles.modalOpenIcon} />
      </View>
      <Image source={{ uri: avatar }} style={styles.photo} />
      <TouchableOpacity
        style={styles.actionButton}
        onPress={() => handleFavorite()}>
        <Icon
          name={favorite ? 'star' : 'staro'}
          color={favorite ? '#333' : '#333'}
          size={18}
        />
        <Text style={styles.actionText}>
          {favorite ? 'Desfavoritar' : 'Favoritar'}
        </Text>
      </TouchableOpacity>
      <Text style={styles.name}>{name}</Text>
    </View>
  );

  const openHeroModal = () => {
    navigation.navigate('HeroModal', hero);
  };

  return (
    <TouchableNativeFeedback onPress={() => openHeroModal()} testID="cardHero">
      {card}
    </TouchableNativeFeedback>
  );
};

export default memo(HeroCard);
