import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  Alert,
  FlatList,
  SafeAreaView,
  ImageBackground,
} from 'react-native';

import Modal from 'react-native-modal';
import AsyncStorage from '@react-native-community/async-storage';

import CharacterCard from '../../components/card/Character';

import api from '../../services/api';

import { timestamp, publicKey, hash } from '../../utils/hash-api-generator';

import styles from './styles';

interface Character {
  id: number;
  name: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  description: string;
}

const Main = () => {
  const [offset, setOffset] = useState<number>(0);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [characters, setCharacters] = useState<Character[]>([]);
  const [visibleModal, setVisibleModal] = useState<boolean>(false);
  const [selectedChar, setSelectedChar] = useState<Character>({} as Character);

  useEffect(() => {
    loadCharacters();

    loadFavorites();

    // eslint-disable-next-line
  }, []);

  const loadCharacters = async () => {
    try {
      const { data } = await api.get(
        `/characters?ts=${timestamp}&apikey=${publicKey}&hash=${hash}&offset=${offset}`,
      );
      console.log(data);
      setCharacters((chars) => [...chars, ...data.data.results]);
      setOffset((prevOffset) => prevOffset + 20);
    } catch (err) {
      Alert.alert(err.message);
    }
  };

  const loadFavorites = async () => {
    const savedFavorites = await AsyncStorage.getItem('favorites');
    if (savedFavorites !== null) {
      setFavorites(JSON.parse(savedFavorites));
    }
  };

  const onToggleFavorite = async (id: number) => {
    const alreadySelected = favorites.findIndex((item) => item === id);

    if (alreadySelected >= 0) {
      const filteredItems = favorites.filter((item) => item !== id);
      setFavorites(filteredItems);
      await AsyncStorage.setItem('favorites', JSON.stringify(filteredItems));
    } else {
      setFavorites([...favorites, id]);
      await AsyncStorage.setItem(
        'favorites',
        JSON.stringify([...favorites, id]),
      );
    }
  };

  return (
    <ImageBackground
      style={styles.logo}
      source={require('../../assets/background.jpg')}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('../../assets/logo.png')}
            resizeMode="contain"
          />
        </View>

        <FlatList
          data={characters}
          showsVerticalScrollIndicator={false}
          onEndReached={() => loadCharacters()}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <CharacterCard
              name={item.name}
              description={item.description}
              thumbnailPath={item.thumbnail.path}
              thumbnailExtension={item.thumbnail.extension}
              isFavorite={favorites.includes(item.id)}
              onPressDetails={() => {
                setVisibleModal(true);
                setSelectedChar(item);
              }}
              onPressStar={() => onToggleFavorite(item.id)}
            />
          )}
        />
      </SafeAreaView>

      <Modal
        isVisible={visibleModal}
        onBackdropPress={() => setVisibleModal(false)}
        onBackButtonPress={() => setVisibleModal(false)}
      >
        {console.log(selectedChar)}
        <View style={styles.modal}>
          {selectedChar &&
            selectedChar.thumbnail &&
            selectedChar.thumbnail.path && (
              <Image
                style={styles.imageModal}
                source={{
                  uri: `${selectedChar.thumbnail.path}.${selectedChar.thumbnail.extension}`,
                }}
              />
            )}

          <Text style={[styles.title, styles.mv10]}>{selectedChar.name}</Text>
          <Text style={styles.justifiedText}>{selectedChar.description}</Text>
        </View>
      </Modal>
    </ImageBackground>
  );
};

export default Main;
