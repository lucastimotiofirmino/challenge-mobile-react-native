import React, { useEffect } from 'react'
import { Text, FlatList, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

import { Character, Characters } from '../../entities'

import { charactersActions } from '../../store/characters'

const CharactersScreen = () => {
  const dispatch = useDispatch()

  const navigation = useNavigation()

  const characters = useSelector((state): Characters => state.entity?.characters || [])
  const fetching = useSelector((state): boolean => state.ui.characters.fetching)

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

  useEffect(() => {
    fetchCharacters()
  }, [])

  const renderItem = ({ item }: { item: Character }) => (
    <TouchableOpacity onPress={() => onPressCharacter(item.id)}>
      <Text style={{ marginVertical: 5 }}>
        {item.name}
      </Text>
    </TouchableOpacity>
  )

  return (
    <FlatList
      contentContainerStyle={{ alignItems: 'center' }}
      data={characters}
      renderItem={renderItem}
      keyExtractor={item => String(item.id)}
      onEndReached={fetchCharacters}
      onEndReachedThreshold={0.1}
    />
  )
}

export default CharactersScreen
