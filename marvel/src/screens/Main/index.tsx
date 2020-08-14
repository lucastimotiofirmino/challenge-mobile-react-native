import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  SafeAreaView,
  ImageBackground,
} from 'react-native';

import api from '../../services/api';

import { timestamp, publicKey, hash } from '../../utils/hash-generator';

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
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    loadCharacters();
  }, []);

  const loadCharacters = async () => {
    const { data } = await api.get(
      `/characters?ts=${timestamp}&apikey=${publicKey}&hash=${hash}&offset=${offset}`,
    );
    console.log(data.data.results);
    setCharacters((characters) => [...characters, ...data.data.results]);
    setOffset((offset) => offset + 20);
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
              <View>
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.description}>{item.description}</Text>
              </View>
            </View>
          )}
        />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Main;
