import React from 'react';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import styles from './styles'

export default function Character() {
  const navigation = useNavigation()

  function navigateToDetail() {
    navigation.navigate('Detail')
  }

  return (
    <>
      <FlatList 
        style={styles.characterList}
        numColumns={2}
        data={[1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]}
        keyExtractor={character => String(character)}
        renderItem={() => (
          <TouchableOpacity onPress={navigateToDetail}>
            <View style={styles.character} ontouchableO >
              <Text style={styles.characterName}>Nome</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </>
  );
}
