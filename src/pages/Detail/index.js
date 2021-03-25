import React from 'react'
import { Feather } from '@expo/vector-icons'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import logoImg from '../../assets/logo/logo.png'

import styles from './styles'

export default function Detail() {
  const navigation = useNavigation()

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

      <Text style={styles.title}>Nome</Text>
      <Text style={styles.description}>Descrição</Text>
    </View>
  )
}