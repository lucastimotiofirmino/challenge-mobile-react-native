import React from 'react';
import {Empty} from './styles';
import {Content} from '../Screen/styles';
import {FlatList} from 'react-native';
import {useSelector} from 'react-redux';
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
    <Content>
      <FlatList
        data={charactersFavorites}
        keyExtractor={(item, index) => `${item.id}${index}`}
        numColumns={2}
        renderItem={renderItem}
        ListEmptyComponent={ListEmptyComponent}
      />
    </Content>
  );
}

export default Favorites;
