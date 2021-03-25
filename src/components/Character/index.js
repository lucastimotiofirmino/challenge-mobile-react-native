import React from 'react';
import { View, FlatList, Image, Text } from 'react-native'

import styles from './styles'

export default function Character() {
  return (
    <>
      <FlatList 
        style={styles.characterList}
        data={[1, 2, 3, 5, 6, 7, 8, 9]}
        keyExtractor={character => String(character)}
        renderItem={() => (
          <View style={styles.character}>
            <Text style={styles.characterName}>Nome</Text>
          </View>
        )}
      />
    </>
  );
}
