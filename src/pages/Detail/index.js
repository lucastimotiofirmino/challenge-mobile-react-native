import React, { useState } from 'react'
import { Feather } from '@expo/vector-icons'
import { ScrollView, View, Image, Text, TouchableOpacity, ImageBackground } from 'react-native'
import { Modal, Portal, Provider } from 'react-native-paper';
import { useNavigation, useRoute } from '@react-navigation/native'

import Button from '../../components/Button'
import Table from '../../components/Table'

import logoImg from '../../assets/logo/logo.png'

import styles from './styles'

export default function Detail() {
  const navigation = useNavigation()
  const route = useRoute()

  const [visible, setVisible] = useState(false);
  const containerStyle = {backgroundColor: 'white', padding: 20,};

  const [modalTitle, setModalTitle] = useState('')
  const [rows, setRows] = useState([])

  const character = route.params.character

  function navigateBack() {
    navigation.goBack()
  }

  function setVariblesModal(valueModal) {
    setModalTitle(valueModal)

    if(valueModal === 'Events') {
      setRows(character.events.items)
    }
    else {
      setRows(character.series.items)
    }

    setVisible(true)
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
          
          <View style={styles.containerButtons}>
            <TouchableOpacity onPress={() => setVariblesModal('Events')}>
              <Button title="Events" />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setVariblesModal('Series')}>
              <Button title="Series" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <Provider>
        <Portal>
          <Modal visible={visible} onDismiss={() => setVisible(false)} contentContainerStyle={containerStyle}>
            <View>
              <Text style={styles.modalTitle}>{modalTitle}</Text>
              <Table rows={rows} />
            </View>
          </Modal>
        </Portal>
      </Provider>
    </ImageBackground>
  )
}