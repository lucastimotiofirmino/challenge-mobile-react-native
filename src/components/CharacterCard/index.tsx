import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import { Character } from '../../entities'

import styles from './styles'

interface Props {
  character: Character
  isFavorite: boolean
  onPressCharacter: (characterId: string) => void
  onPressFavorite: (character: Character) => void
}

const CharacterCard = ({ character, onPressFavorite, onPressCharacter, isFavorite }: Props) => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.containerImage} onPress={() => onPressCharacter(character.id)}>
      <Image
        source={{ uri: `${character.thumbnail.path}.${character.thumbnail.extension}` }}
        style={styles.image}
      />
      <Text style={styles.name}>{character.name}</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.containerFavorite} onPress={() => onPressFavorite(character)}>
      <Text style={styles.textFavorite}>{isFavorite ? `Remove\nfavorite` : 'Add favorite'}</Text>
    </TouchableOpacity>
  </View>
)

export default CharacterCard
