import React, { useEffect, useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { GetSingleCharactes } from '../../../utils'
import { Container, Load, Text, Img} from './style'

interface Props {
  readonly id: string
  onPress: Function
}

interface InterfaceThumbnail {
  readonly extension: String,
  readonly path: String
}

interface interfaceData {
  readonly name: String
  readonly description: String
  readonly thumbnail: InterfaceThumbnail
}

const CardFavorite: React.FC<Props> = (props, interfaceData: interfaceData) => {

  useEffect(() => {
    request()
  }, [])

  const [information, setInformation] = useState<interfaceData>(interfaceData)

  async function request() {
    try {
      const response = await GetSingleCharactes(props.id)
      setInformation(response)
    } catch (error) {
      alert("Eita... não deu para consultar a api :/")
    }
  }

  return (
    <Load
      LinearGradient={LinearGradient}
      visible={information.name !== undefined}
    > 
    {
      information.name !== undefined && (
        <Container onPress={props.onPress}>
          <Text></Text>
          <Img
            source={{
              uri: `${information.thumbnail.path}/portrait_uncanny.${information.thumbnail.extension}`
            }}
          />
          <Text>
            {information.name}
          </Text>
        </Container>
      )
    }
    </Load> 
  )
}

export default CardFavorite