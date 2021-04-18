import React from 'react'
import { FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useSelector, shallowEqual } from 'react-redux'
import { CardFavorite, CardHeader } from '../../components'
import { Container, Text } from './style' 

const Favorites: React.FC = () => {

  const navigation = useNavigation()

  const favorites: readonly InterfaceFavorite[] = useSelector(
    (state: FavoriteState) => state.favorites,
    shallowEqual
  )

  return (
    <Container>
      <FlatList
        data={favorites}
        keyExtractor={item => item.id.toString()}
        ListHeaderComponent={<CardHeader label={'Personagens favoritos'} />}
        renderItem={(({item}) => (
          <CardFavorite
            id={item.id}
            onPress={() => navigation.navigate('SingleCharacter', {id: item.id})}
          />
        ))}
        ListEmptyComponent={<Text>Beleza? sua lista está vazia meu chapa</Text>}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{alignItems: "center"}}
      />
    </Container>
  )
}

export default Favorites