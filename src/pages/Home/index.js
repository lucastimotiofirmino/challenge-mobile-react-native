import React from 'react'
import { View, Image, Text } from 'react-native'

import logoImg from '../../assets/logo/logo.png'

import styles from './styles'

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>
          Filtro
        </Text>
      </View>

      <Text style={styles.title}>Bem-vindo!</Text>
      <Text style={styles.description}>Selecione um personagem para saber mais sobre séries e eventos</Text>
    </View>
  )
}