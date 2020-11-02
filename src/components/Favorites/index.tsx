import React, {useState, useEffect} from 'react';
import {Container, Header, Logo, Empty} from './styles';
import {FlatList} from 'react-native';
import logo from '../../assets/marvel.png';
import Character from '../Character';

type CharactersState = Marvel.Character[] | undefined;
type Item = {item: Marvel.Character};

function Favorites() {
  const [characters, setCharacters] = useState<CharactersState>([]);

  useEffect(() => {}, []);

  const renderItem = ({item}: Item) => <Character data={item} />;

  const ListEmptyComponent = () => (
    <Empty>Nenhum personagem adicionado como favorito!</Empty>
  );

  return (
    <Container>
      <Header>
        <Logo source={logo} />
      </Header>
      <FlatList
        data={characters}
        keyExtractor={(item, index) => `${item.id}${index}`}
        numColumns={2}
        renderItem={renderItem}
        ListEmptyComponent={ListEmptyComponent}
      />
    </Container>
  );
}

export default Favorites;
