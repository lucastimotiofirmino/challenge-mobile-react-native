import React from 'react';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import styles from './styles'

export default function Character(props) {
  const navigation = useNavigation()

  console.log("ENTREIIIIIIIII")
  console.log(props)

  function navigateToDetail(character) {
    navigation.navigate('Detail', { character })
  }

  return (
    <>
      <FlatList 
        style={styles.characterList}
        numColumns={2}
        data={props.lista}
        keyExtractor={character => String(character.id)}
        renderItem={({ item: character }) => (
          <TouchableOpacity onPress={() => navigateToDetail(character)}>
            <View style={styles.character} ontouchableO >
              <Text style={styles.characterName}>{character.name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </>
  );
}
