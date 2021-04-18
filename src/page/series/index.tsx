import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { GetListSeries, GenerateUniqueKey } from '../../utils'
import { CardLoading, CardInformation, CardHeader } from '../../components'
import { Container } from './style'

interface interfaceData {
  readonly id: number | string
  readonly title: string | null
}

const Series: React.FC = () => {

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
      const response = await GetListSeries(offset)
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
        ListHeaderComponent={<CardHeader label={'Séries'} />}
        renderItem={(({item}) => (
          <CardInformation
            id={item.id}
            label={item.title}
            onPress={() => navigation.navigate('SingleSerie', {id: item.id})}
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

export default Series