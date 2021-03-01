import React, { useState, Fragment } from 'react'
import { SafeAreaView, Text, TouchableOpacity, View, ScrollView } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import Modal from 'react-native-modal'

import { Characters, SeriesList, Events } from '../../entities'

import { characterDetailsActions } from '../../store/characterDetails'

import styles from './styles'

const CharacterDetailsScreen = () => {
  const dispatch = useDispatch()

  const selectedCharacterId = useSelector(state => state.ui.characters.selectedCharacterId)
  const characters = useSelector((state): Characters => state.entity.characters)
  const series = useSelector((state): SeriesList => state.entity.characterDetails.series)
  const events = useSelector((state): Events => state.entity.characterDetails.events)

  const [showModalSeries, setShowModalSeries] = useState<boolean>(false)
  const [showModalEvents, setShowModalEvents] = useState<boolean>(false)

  const [selectedCharacter] = characters.filter(character => character.id === selectedCharacterId)

  const fetchSeries = () => {
    dispatch(characterDetailsActions.ui.requestSeries())
    setShowModalSeries(true)
  }

  const fetchEvents = () => {
    dispatch(characterDetailsActions.ui.requestEvents())
    setShowModalEvents(true)
  }

  return (
    <SafeAreaView>
      <Text style={styles.description}>{selectedCharacter.description || 'No description for this character'}</Text>
      <TouchableOpacity style={styles.containerButtons} onPress={fetchSeries}>
        <Text>Series</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.containerButtons} onPress={fetchEvents}>
        <Text>Events</Text>
      </TouchableOpacity>

      <Modal
        isVisible={showModalSeries}
        style={{ justifyContent: 'flex-end', margin: 0 }}
        onBackdropPress={() => setShowModalSeries(false)}
        onBackButtonPress={() => setShowModalSeries(false)}
      >
        <View style={{ backgroundColor: '#fff', height: 400, margin: 0 }}>
          <ScrollView contentContainerStyle={{ paddingBottom: 16 }}>
            {series.map(seriesItem => (
              <Fragment key={seriesItem.id}>
                <Text style={styles.modalTitle}>{seriesItem.title}</Text>
                <Text style={styles.modalDescription}>
                  {seriesItem.description || 'No description for this character'}
                </Text>
                <Text style={styles.modalStartDate}>Start year: {seriesItem.startYear}</Text>
                <Text style={styles.modalEndDate}>End year: {seriesItem.endYear}</Text>
              </Fragment>
            ))}
          </ScrollView>
        </View>
      </Modal>

      <Modal
        isVisible={showModalEvents}
        style={{ justifyContent: 'flex-end', margin: 0 }}
        onBackdropPress={() => setShowModalEvents(false)}
        onBackButtonPress={() => setShowModalEvents(false)}
      >
        <View style={{ backgroundColor: '#fff', height: 400, margin: 0 }}>
          <ScrollView contentContainerStyle={{ paddingBottom: 16 }}>
            {events.map(event => (
              <Fragment key={event.id}>
                <Text style={styles.modalTitle}>{event.title}</Text>
                <Text style={styles.modalDescription}>{event.description}</Text>
                <Text style={styles.modalStartDate}>{event.start}</Text>
                <Text style={styles.modalEndDate}>{event.end}</Text>
              </Fragment>
            ))}
          </ScrollView>
        </View>
      </Modal>
    </SafeAreaView>
  )
}

export default CharacterDetailsScreen
