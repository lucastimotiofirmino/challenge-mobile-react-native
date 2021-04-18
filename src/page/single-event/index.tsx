import React, { Fragment, useEffect, useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { useRoute } from '@react-navigation/native'
import { GetSingleEvents } from '../../utils'
import { Container, Header, Indicator, Text, Img, Loading } from './style'

interface InterfaceThumbnail {
  readonly extension: string,
  readonly path: string
}

interface InterfaceData {
  readonly title: string
  readonly description: string
  readonly thumbnail: InterfaceThumbnail
}

const SingleEvent: React.FC<InterfaceData> = (InterfaceData) => {

  useEffect(() => {
    request()
  }, [])

  const params: any = useRoute().params

  const [information, setInformation] = useState<InterfaceData>(InterfaceData)

  async function request() {
    try {
      const response = await GetSingleEvents(params.id)
      setInformation(response)
    } catch (error) {
      alert("Eita... não deu para consultar a api :/")
    }
  }
  
  return (
    <Fragment>
      <Header>
        <Indicator />
        <Text
          size={20}
          weight={'bold'}
          marginT={10}
          marginB={10}
          align={'center'}
        >
          {information.title}
        </Text>
      </Header>

      <Container
        contentContainerStyle={{alignItems: "center"}}
        showsVerticalScrollIndicator={false}
      >
      {
          information.thumbnail && (
            <Img
              source={{
                uri: `${information.thumbnail.path}/portrait_uncanny.${information.thumbnail.extension}`
              }}
            />
          )
        }

        {
          information.thumbnail == undefined && (
            <Loading LinearGradient={LinearGradient} />
          )
        }
        
        <Text
          size={17}
          marginB={10}
        >
          {information.description}
        </Text>
      </Container>
    </Fragment>
  )
}

export default SingleEvent