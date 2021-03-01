import React, { useState, Fragment } from 'react'
import { SafeAreaView, Text, TouchableOpacity, View, ScrollView } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import Modal from 'react-native-modal'

import { Characters, SeriesList, Events } from '../../entities'

import { characterDetailsActions } from '../../store/characterDetails'

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
      <Text>Character Details</Text>
      <Text>{selectedCharacter.description}</Text>
      <TouchableOpacity onPress={fetchSeries}>
        <Text>Series</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={fetchEvents}>
        <Text>Events</Text>
      </TouchableOpacity>

      <Modal
        isVisible={showModalSeries}
        style={{ justifyContent: 'flex-end', margin: 0 }}
        onBackdropPress={() => setShowModalSeries(false)}
        onBackButtonPress={() => setShowModalSeries(false)}
      >
        <View style={{ backgroundColor: '#fff', height: 400, margin: 0 }}>
          <ScrollView>
            {series.map(seriesItem => (
              <Fragment key={seriesItem.id}>
                <Text>{seriesItem.title}</Text>
                <Text>{seriesItem.description}</Text>
                <Text>{seriesItem.startYear}</Text>
                <Text>{seriesItem.endYear}</Text>
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
          <ScrollView>
            {events.map(event => (
              <Fragment key={event.id}>
                <Text>{event.title}</Text>
                <Text>{event.description}</Text>
                <Text>{event.start}</Text>
                <Text>{event.end}</Text>
              </Fragment>
            ))}
          </ScrollView>
        </View>
      </Modal>
    </SafeAreaView>
  )
}

export default CharacterDetailsScreen
