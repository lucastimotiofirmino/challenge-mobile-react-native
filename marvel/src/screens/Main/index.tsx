import React, { useEffect, useState } from 'react';
import {
  View,
  Image,
  Alert,
  FlatList,
  TextInput,
  SafeAreaView,
  RefreshControl,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';

import Modal from 'react-native-modal';
import AsyncStorage from '@react-native-community/async-storage';

import CharacterCard from '../../components/card/Character';
import CharacterDetails from '../../components/modal/CharacterDetails';

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

interface Comic {
  id: number;
  title: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

const Main = () => {
  const [offset, setOffset] = useState<number>(0);
  const [search, setSearch] = useState<string>('');
  const [comics, setComics] = useState<Comic[]>([]);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [characters, setCharacters] = useState<Character[]>([]);
  const [visibleModal, setVisibleModal] = useState<boolean>(false);
  const [selectedChar, setSelectedChar] = useState<Character>({} as Character);
  const [filteredCharacters, setFilteredCharacters] = useState<Character[]>([]);

  useEffect(() => {
    loadCharacters();

    loadFavorites();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadCharacters = async () => {
    try {
      setIsLoading(true);
      const { data } = await api.get(
        `/characters?ts=${timestamp}&apikey=${publicKey}&hash=${hash}&offset=${offset}`,
      );
      setCharacters((chars) => [...chars, ...data.data.results]);
      setOffset((prevOffset) => prevOffset + 20);
    } catch (err) {
      Alert.alert(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const loadComics = async (id: number) => {
    try {
      const { data } = await api.get(
        `/characters/${id}/comics?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`,
      );
      setComics(data.data.results);
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

  const handleCharacterDetails = (item: Character) => {
    setVisibleModal(true);
    setSelectedChar(item);
    loadComics(item.id);
  };

  const handleSearch = (text: string) => {
    setSearch(text);
    setFilteredCharacters(
      characters.filter((char) =>
        char.name.toLowerCase().includes(text.toLowerCase()),
      ),
    );
  };

  return (
    <ImageBackground
      style={styles.hw100}
      source={require('../../assets/background.jpg')}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.hw100}
            source={require('../../assets/logo.png')}
            resizeMode="contain"
          />
        </View>

        <TextInput
          style={styles.textInput}
          value={search}
          onChangeText={(text) => handleSearch(text)}
          placeholder="Search character"
          autoCorrect={false}
        />

        {isLoading ? (
          <ActivityIndicator size="large" color="#fff" />
        ) : (
          <FlatList
            data={
              filteredCharacters.length > 0 ? filteredCharacters : characters
            }
            showsVerticalScrollIndicator={false}
            onEndReached={() => loadCharacters()}
            keyExtractor={(item) => String(item.id)}
            refreshControl={
              <RefreshControl
                refreshing={isLoading}
                onRefresh={() => loadCharacters()}
              />
            }
            renderItem={({ item }) => (
              <CharacterCard
                name={item.name}
                description={item.description}
                thumbnailPath={item.thumbnail.path}
                thumbnailExtension={item.thumbnail.extension}
                isFavorite={favorites.includes(item.id)}
                onPressDetails={() => handleCharacterDetails(item)}
                onPressStar={() => onToggleFavorite(item.id)}
              />
            )}
          />
        )}
      </SafeAreaView>

      <Modal
        style={styles.modal}
        isVisible={visibleModal}
        onBackdropPress={() => setVisibleModal(false)}
        onBackButtonPress={() => setVisibleModal(false)}
      >
        <CharacterDetails
          onClose={() => setVisibleModal(false)}
          name={selectedChar.name}
          description={selectedChar.description}
          thumbnailPath={
            selectedChar &&
            selectedChar.thumbnail &&
            selectedChar.thumbnail.path
          }
          thumbnailExtension={
            selectedChar &&
            selectedChar.thumbnail &&
            selectedChar.thumbnail.extension
          }
          comics={comics}
        />
      </Modal>
    </ImageBackground>
  );
};

export default Main;
