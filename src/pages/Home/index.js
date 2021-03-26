import React, { useState, useEffect } from 'react'
import { View, Image, Text } from 'react-native'

import Filter from '../../components/Filter'
import CharacterList from '../../components/Character'

import api from '../../services/api'

import logoImg from '../../assets/logo/logo.png'

import styles from './styles'

export default function Home() {
  const [filtro, setFiltro] = useState('Nomes')
  const [characters, setCharacters] = useState([])
  const [copyright, setCopyright] = useState('');

  async function loadCharacters() {
    const response = await api.get()

    setCopyright(response.data.copyright)
    setCharacters(response.data.data.results)

    // setCharacters(response.data)
  }

  useEffect(() => {
    loadCharacters()
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
      </View>

      <Text style={styles.title}>Bem-vindo!</Text>
      <Text style={styles.description}>Selecione um personagem para saber mais sobre séries e eventos</Text>

      <CharacterList lista={characters} />
     
     
     <Filter teste={setFiltro} titulo="aeae" />

      {/* {
        filtro === 'Nomes' ? (<Text style={styles.title}>Nomes</Text>) : (<Text style={styles.title}>Favoritos</Text>)
      } */}
     

      
    </View>
  )
}