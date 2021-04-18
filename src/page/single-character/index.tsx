import React, { Fragment, useEffect, useState } from 'react'
import { Dispatch } from 'redux'
import { addFavorite, removeFavorite } from '../../redux/store/actionCreators'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { LinearGradient } from 'expo-linear-gradient'
import { useRoute } from '@react-navigation/native'
import ListText from './list-text'
import { StarOn, StarOff } from '../../assets/img'
import { GetSingleCharactes } from '../../utils'
import {
  Container,
  Header,
  Indicator,
  Text,
  Img,
  Row,
  Touch,
  Icon,
  Contain,
  Loading
} from './style'

interface InterfaceThumbnail {
  readonly extension: string
  readonly path: string
}

interface InterfaceGeneric {
	readonly name: string
}

interface InterfaceData {
  readonly name: string
  readonly description: string | null
  readonly thumbnail: InterfaceThumbnail
  readonly comics: InterfaceGeneric[]
	readonly series: InterfaceGeneric[]
	readonly events: InterfaceGeneric[]
}

const SingleCharacter: React.FC<InterfaceData> = (InterfaceData) => {

  const params: any = useRoute().params
  const dispatch: Dispatch<any> = useDispatch()

  useEffect(() => {
    request()
  }, [])

  const [information, setInformation] = useState<InterfaceData>(InterfaceData)

  async function request() {
    try {
      const response = await GetSingleCharactes(params.id)
      setInformation(response)
    } catch (error) {
      alert("Eita... não deu para consultar a api :/")
    }
  }

  function checkFavorite() {
    return favorites.findIndex(function (data) {
      return data.id === params.id
    }) >= 0
  }

  const favorites: readonly InterfaceFavorite[] = useSelector(
    (state: FavoriteState) => state.favorites,
    shallowEqual
  )

  function switchFavoriteAction(favorite: InterfaceFavorite) {
    if(checkFavorite()){
      dispatch(removeFavorite(favorite))
    }else{
      dispatch(addFavorite(favorite))
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
          {information.name}
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
          information.name == undefined && (
            <Loading LinearGradient={LinearGradient} />
          )
        }

        <Row>
          <Touch onPress={() => switchFavoriteAction({"id": params.id})}>
            <Icon source={checkFavorite() ? StarOn : StarOff} />
            <Text
              size={16}
              marginL={5}
            >
              {checkFavorite() ? "Favorito" : "Favoritar"}
            </Text>
          </Touch>
        </Row>

        {
          information.name == undefined && (
            <Loading LinearGradient={LinearGradient} />
          )
        }

        {
          information.name != undefined && (
            <Fragment>
              <Text
                size={17}
                marginB={10}
                weight={'bold'}
              >
                Descrição
              </Text>
              <Contain>
                <Text size={17} marginB={10}>
                  {information.description == '' ? 
                  'Sem descrição' : 
                  information.description}
                </Text>
              </Contain>

              <ListText
                series={information.series}
                events={information.events}
                comics={information.comics}
              />
            </Fragment>
          )
        }
      </Container>
    </Fragment>
  )
}

export default SingleCharacter