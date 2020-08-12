import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, Image, FlatList } from 'react-native';

import api from '../../services/api';

import { timestamp, publicKey, hash } from '../../utils/hash-generator';

import styles from './styles';

interface Character {
  id: number;
  name: string;
  thumbnail: { path: string, extension: string };
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
    setCharacters([...characters, ...data.data.results]);
    setOffset(offset + 20);
  };

  return (
    <SafeAreaView style={styles.container}>
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
              <Text>{item.description}</Text>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Main;
