import React from 'react'
import { Feather } from '@expo/vector-icons'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'

import logoImg from '../../assets/logo/logo.png'

import styles from './styles'

export default function Detail() {
  const navigation = useNavigation()
  const route = useRoute()

  const character = route.params.character

  function navigateBack() {
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />

        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#E82041" />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>{character.name}</Text>
      <Text style={styles.description}>{character.description === '' ? 'Sem descrição cadastrada' : `Descrição: ${character.description}`}</Text>
    </View>
  )
}