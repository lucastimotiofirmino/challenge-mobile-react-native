import React, { useState } from 'react'
import { View, Image, Text, ImageBackground } from 'react-native'

import Filter from '../../components/Filter'
import CharacterList from '../../components/CharacterList'

import logoImg from '../../assets/logo/logo.png'

import styles from './styles'

export default function Home() {
  const [filtro, setFiltro] = useState('Nomes')
  
  return (
    <ImageBackground source={require('../../assets/pattern.jpg')} style={styles.imgBackground} imageStyle={{resizeMode: 'repeat'}}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={logoImg} />
        </View>

        <Text style={styles.title}>Welcome!</Text>
        <Text style={styles.description}>Select a character to learn more details</Text>

        <CharacterList />
      
        <Filter funcSetFiltro={setFiltro} />

        {/* {
          filtro === 'Nomes' ? (<Text style={styles.title}>Nomes</Text>) : (<Text style={styles.title}>Favoritos</Text>)
        } */}
        
      </View>
    </ImageBackground>
  )
}