import React, { useEffect } from 'react'
import { Text, FlatList, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { charactersActions } from '../../store/characters'

const Characters = () => {
  const dispatch = useDispatch()

  const characters = useSelector(state => state.entity?.characters || [])

  useEffect(() => {
    dispatch(charactersActions.ui.request())
  }, [])

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => console.tron.log(item.id)}>
      <Text style={{ marginVertical: 5 }}>
        {item.name}
      </Text>
    </TouchableOpacity>
  )

  return (
    <FlatList
      contentContainerStyle={{ alignItems: 'center' }}
      data={Object.values(characters)}
      renderItem={renderItem}
      keyExtractor={item => String(item.id)}
    />
  )
}

export default Characters
