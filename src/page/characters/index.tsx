import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { GetListCharactes, GenerateUniqueKey } from '../../utils'
import { CardLoading, CardInformation, CardHeader } from '../../components'
import { Container } from './style'

interface interfaceData {
  readonly id: number | string
  readonly name: string
}

const Characters: React.FC<interfaceData> = () => {

  const navigation = useNavigation()

  useEffect(() => {
    request()
  }, [])

  const [offset, setOffset] = useState(1)
  const [list, setList] = useState<interfaceData[]>([])
  const [loading, setLoading] = useState(false)

  async function request() {
    if(loading) return null

    setLoading(true)

    try {
      const response = await GetListCharactes(offset)
      setList([...list, ...response])
      setOffset(offset+1)
      setLoading(false)
    } catch (error) {
      alert("Eita... não deu para consultar a api :/")
    }
  }

  return (
    <Container>
      <FlatList
        data={list}
        keyExtractor={item => GenerateUniqueKey(item.id)}
        ListHeaderComponent={<CardHeader label={'Personagens'} />}
        renderItem={(({item}) => (
          <CardInformation
            id={item.id}
            label={item.name}
            onPress={() => navigation.navigate('SingleCharacter', {id: item.id})}
          />
        ))}
        ListEmptyComponent={<CardLoading />}
        ListFooterComponent={() => <ActivityIndicator color={'black'} />}
        onEndReached={request}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{alignItems: "center"}}
      />
    </Container>
  )
}

export default Characters