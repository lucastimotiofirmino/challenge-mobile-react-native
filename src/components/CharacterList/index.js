import React, { useState, useEffect } from 'react';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'

import api from '../../services/api'

import styles from './styles.js'

export default function CharacterList() {
  const navigation = useNavigation()
  const [characterFavorited, setCharacterFavorited] = useState(false)

  const [characters, setCharacters] = useState([])
  const [copyright, setCopyright] = useState('');

  // variáveis que controlam a paginação infinita
  const [offset, setOffset] = useState(0)
  const [loading, setLoading] = useState(false)

  async function loadCharacters() {
    if(loading) {
      return
    }

    setLoading(true)

    const response = await api.get('', {
      params: { offset: offset }
    }) 

    setCopyright(response.data.copyright)
    setCharacters([... characters, ... response.data.data.results]) //adicionando os novos apos adicionar os ja existentes na lista

    setOffset(offset + 20) //carrega 20 em 20
    setLoading(false)
  }

  useEffect(() => {
    loadCharacters()
  }, [])

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
        data={characters}
        keyExtractor={character => String(character.id)}
        showsVerticalScrollIndicator={true}
        onEndReached={loadCharacters}
        onEndReachedThreshold={0.5}
        renderItem={({ item: character }) => (
          <TouchableOpacity onPress={() => navigateToDetail(character)}>
            <View style={styles.character} ontouchableO >
              <Image style={styles.characterImage} source={{uri: `${character.thumbnail.path}.${character.thumbnail.extension}` }}  />
              
              <View style={styles.containerName}>
                <Text numberOfLines={1} style={styles.characterName}>{character.name}</Text>
                <TouchableOpacity onPress={() => favoriteCharacter}>
                  <Feather name={characterFavorited ? "heart" : "heart"} size={22} color="#ed1b24" />
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </>
  );
}
