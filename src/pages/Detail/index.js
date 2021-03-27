import React from 'react'
import { Feather } from '@expo/vector-icons'
import { ScrollView, View, Image, Text, TouchableOpacity, ImageBackground } from 'react-native'
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
    <ImageBackground source={require('../../assets/pattern.jpg')} style={styles.imgBackground} imageStyle={{resizeMode: 'repeat'}}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <Image source={logoImg} />

            <TouchableOpacity onPress={navigateBack}>
              <Feather name="arrow-left" size={28} color="#ed1b24" />
            </TouchableOpacity>
          </View>

          <Text style={styles.title}>{character.name}</Text>
          <Image style={styles.image} source={{uri: `${character.thumbnail.path}.${character.thumbnail.extension}` }}  />
          <Text style={styles.description}>{character.description === '' ? 'No description registered' : `Description: ${character.description}`}</Text>
        </View>
      </ScrollView>
    </ImageBackground>
  )
}