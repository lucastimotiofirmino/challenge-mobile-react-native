import React from 'react';
import {Container, Header, Logo, Empty} from './styles';
import {FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import logo from '../../assets/marvel.png';
import Character from '../Character';

function Favorites() {
  const charactersFavorites = useSelector<Redux.State, Marvel.Character[]>(
    (state) => state.favorites,
  );

  const renderItem = ({item}: Marvel.CharacterItem) => (
    <Character item={item} />
  );

  const ListEmptyComponent = () => (
    <Empty>Nenhum personagem adicionado como favorito!</Empty>
  );

  return (
    <Container>
      <Header>
        <Logo source={logo} />
      </Header>
      <FlatList
        data={charactersFavorites}
        keyExtractor={(item, index) => `${item.id}${index}`}
        numColumns={2}
        renderItem={renderItem}
        ListEmptyComponent={ListEmptyComponent}
      />
    </Container>
  );
}

export default Favorites;
