import React, { useState } from 'react';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'

import styles from './styles'

export default function Character(props) {
  const navigation = useNavigation()
  const [characterFavorited, setCharacterFavorited] = useState(false)

  console.log("ENTREIIIIIIIII")
  console.log(props)

  function navigateToDetail(character) {
    navigation.navigate('Detail', { character })
  }

  function favoriteCharacter() {
    console.log('Cliquei no favoritar')
    if(characterFavorited) {
      setCharacterFavorited(false)
    }
    else {
      setCharacterFavorited(true)
    }
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
              <Image style={styles.characterImage} source={{uri: `${character.thumbnail.path}.${character.thumbnail.extension}` }}  />
              
              <View style={styles.containerName}>
                <Text numberOfLines={1} style={styles.characterName}>{character.name}</Text>
                <TouchableOpacity onPress={() => favoriteCharacter}>
                  <Feather name={characterFavorited ? "heart" : "heart"} size={22} color="#E82041" />
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </>
  );
}
