import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  Alert,
  FlatList,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

import Modal from 'react-native-modal';
import AsyncStorage from '@react-native-community/async-storage';

import Icon from 'react-native-vector-icons/FontAwesome';

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
            <View style={styles.cardContainer}>
              <View style={styles.imageContainer}>
                <Image
                  style={styles.image}
                  source={{
                    uri: `${item.thumbnail.path}.${item.thumbnail.extension}`,
                  }}
                />
              </View>
              <View style={styles.descriptionContainer}>
                <Text style={styles.title} numberOfLines={2}>
                  {item.name}
                </Text>
                <Text style={styles.description} numberOfLines={2}>
                  {item.description}
                </Text>

                <View style={styles.detailsContainer}>
                  <TouchableOpacity
                    style={styles.detailsButton}
                    onPress={() => {
                      setVisibleModal(true);
                      setSelectedChar(item);
                    }}
                  >
                    <Text style={styles.detailsText}>Details</Text>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => onToggleFavorite(item.id)}>
                    <Icon
                      name={favorites.includes(item.id) ? 'star' : 'star-o'}
                      size={26}
                      color="#f78f3f"
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        />
      </SafeAreaView>

      <Modal
        isVisible={visibleModal}
        onBackdropPress={() => setVisibleModal(false)}
        onBackButtonPress={() => setVisibleModal(false)}
      >
        <View style={styles.modal}>
          {console.log(selectedChar)}
          <View>
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
          </View>

          <Text style={[styles.title, styles.mv10]}>{selectedChar.name}</Text>
          <Text style={styles.justifiedText}>{selectedChar.description}</Text>
        </View>
      </Modal>
    </ImageBackground>
  );
};

export default Main;
