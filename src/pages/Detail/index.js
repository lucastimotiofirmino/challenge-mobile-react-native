import React from 'react'
import { Feather } from '@expo/vector-icons'
import { ScrollView, View, Image, Text, TouchableOpacity, Dimensions } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'

import logoImg from '../../assets/logo/logo.png'

import styles from './styles'

export default function Detail() {
  const navigation = useNavigation()
  const route = useRoute()

  const SCREEN_WIDTH = Dimensions.get('screen').width / 1.15

  const character = route.params.character

  function navigateBack() {
    navigation.goBack()
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={logoImg} />

          <TouchableOpacity onPress={navigateBack}>
            <Feather name="arrow-left" size={28} color="#ed1b24" />
          </TouchableOpacity>
        </View>

        <Text style={styles.title}>{character.name}</Text>
        <Image style={{width:SCREEN_WIDTH, height:SCREEN_WIDTH}} source={{uri: `${character.thumbnail.path}.${character.thumbnail.extension}` }}  />
        <Text style={styles.description}>{character.description === '' ? 'Sem descrição cadastrada' : `Descrição: ${character.description}`}</Text>
      </View>
    </ScrollView>
  )
}