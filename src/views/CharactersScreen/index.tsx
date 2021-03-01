import React, { useEffect, useState, useMemo } from 'react'
import { Text, FlatList, TouchableOpacity, View, SafeAreaView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { Character, Characters } from '../../entities'

import { charactersActions } from '../../store/characters'

const CharactersScreen = () => {
  const STORAGE_KEY_FAVORITES = 'favoritesCharacters'

  const dispatch = useDispatch()

  const navigation = useNavigation()

  const characters = useSelector((state): Characters => state.entity.characters || [])
  const fetching = useSelector((state): boolean => state.ui.characters.fetching)

  const [favoritesCharacters, setFavoritesCharacters] = useState<Characters>([])
  const [favoritesCharactersVisible, setfavoritesCharactersVisible] = useState<boolean>(false)

  const fetchCharacters = () => {
    if (fetching) {
      return
    }

    dispatch(charactersActions.ui.request())
  }

  const onPressCharacter = (characterId: string) => {
    dispatch(charactersActions.ui.selectCharacter(characterId))
    navigation.navigate('CharacterDetails')
  }

  const fetchFavoritesCharacters = async () => {
    const favoritesCharactersStorage = await AsyncStorage.getItem(STORAGE_KEY_FAVORITES)
    const favoritesCharacters: Characters = !!favoritesCharactersStorage ? JSON.parse(favoritesCharactersStorage) : []

    setFavoritesCharacters(favoritesCharacters)
  }

  const favoritesCharactersIds = useMemo(() => (
    favoritesCharacters.map(favoriteCharacter => favoriteCharacter.id)
  ), [favoritesCharacters])

  const onPressFavorite = (character: Character) => {
    favoritesCharactersIds.includes(character.id)
      ? removeFavoriteCharacter(character.id)
      : addFavoriteCharacter(character)
  }

  const addFavoriteCharacter = async (character: Character) => {
    setFavoritesCharacters([...favoritesCharacters, character])
  }

  const removeFavoriteCharacter = async (characterId: string) => {
    const filteredFavoritesCharacters = favoritesCharacters.filter(favoriteCharacter => favoriteCharacter.id !== characterId)
    
    setFavoritesCharacters(filteredFavoritesCharacters)
  }

  const updateStorage = async () => {
    await AsyncStorage.setItem(STORAGE_KEY_FAVORITES, JSON.stringify(favoritesCharacters))
  }

  const filteredCharacters = useMemo(() => {
    if (favoritesCharactersVisible) {
      return favoritesCharacters
    }

    return characters
  }, [favoritesCharactersVisible, favoritesCharacters, characters])

  useEffect(() => {
    fetchCharacters()
    fetchFavoritesCharacters()
  }, [])

  useEffect(() => {
    updateStorage()
  }, [favoritesCharacters])

  const renderItem = ({ item }: { item: Character }) => (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <TouchableOpacity onPress={() => onPressCharacter(item.id)}>
        <Text style={{ marginVertical: 10 }}>
          {item.name}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onPressFavorite(item)}>
        <Text>
         {favoritesCharactersIds.includes(item.id) ? '(Remover favorito)' : '(Adicionar favorito)'}
        </Text>
      </TouchableOpacity>
    </View>
  )

  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => setfavoritesCharactersVisible(!favoritesCharactersVisible)}>
        <Text>{favoritesCharactersVisible ? 'Exibir todos' : 'Apenas favoritos'}</Text>
      </TouchableOpacity>
      <FlatList
        contentContainerStyle={{ alignItems: 'center' }}
        data={filteredCharacters}
        renderItem={renderItem}
        keyExtractor={item => String(item.id)}
        onEndReached={fetchCharacters}
        onEndReachedThreshold={0.1}
      />
    </SafeAreaView>
  )
}

export default CharactersScreen
