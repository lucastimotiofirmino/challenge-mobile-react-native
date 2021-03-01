import React, { useEffect, useState, useMemo } from 'react'
import { Text, FlatList, TouchableOpacity, View, SafeAreaView, TextInput } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import CharacterCard from '../../components/CharacterCard'

import { Character, Characters } from '../../entities'

import { charactersActions } from '../../store/characters'

import styles from './styles'

const CharactersScreen = () => {
  const STORAGE_KEY_FAVORITES = 'favoritesCharacters'

  const dispatch = useDispatch()

  const navigation = useNavigation()

  const characters = useSelector((state): Characters => state.entity.characters || [])
  const fetching = useSelector((state): boolean => state.ui.characters.fetching)
  const characterName = useSelector((state): string => state.ui.characters.characterName || '')

  const [favoritesCharacters, setFavoritesCharacters] = useState<Characters>([])
  const [favoritesCharactersVisible, setfavoritesCharactersVisible] = useState<boolean>(false)
  const [timeoutId, setTimeoutId] = useState<number>(0)

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

  const onChangeCharacterName = (characterName: string) => {
    clearTimeout(timeoutId)

    const newTimeoutId = setTimeout(() => {
      dispatch(charactersActions.ui.requestByName())
    }, 2000)
    setTimeoutId(Number(newTimeoutId))
    
    dispatch(charactersActions.ui.setCharacterName(characterName))
  }

  const isFavoriteCharacter = (characterId: string) => favoritesCharactersIds.includes(characterId)

  useEffect(() => {
    fetchCharacters()
    fetchFavoritesCharacters()
  }, [])

  useEffect(() => {
    updateStorage()
  }, [favoritesCharacters])

  const renderItem = ({ item }: { item: Character }) => (
    <CharacterCard
      character={item}
      isFavorite={isFavoriteCharacter(item.id)}
      onPressCharacter={() => onPressCharacter(item.id)}
      onPressFavorite={onPressFavorite}
    />
  )

  return (
    <SafeAreaView>
      <TouchableOpacity style={styles.containerTextFavorites} onPress={() => setfavoritesCharactersVisible(!favoritesCharactersVisible)}>
        <Text style={styles.textFavotires}>{favoritesCharactersVisible ? 'Show all' : 'Show only favorites'}</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.textInput}
        onChangeText={onChangeCharacterName}
        value={characterName}
        placeholder="Busque um personagem"
      />
      <FlatList
        style={styles.containerFlatList}
        contentContainerStyle={styles.contentContainerFlatList}
        data={filteredCharacters}
        renderItem={renderItem}
        keyExtractor={item => String(item.id)}
        onEndReached={characterName ? () => {} : fetchCharacters}
        onEndReachedThreshold={0.1}
        numColumns={3}
      />
    </SafeAreaView>
  )
}

export default CharactersScreen
