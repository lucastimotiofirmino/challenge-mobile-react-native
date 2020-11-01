import React, {useEffect, useState, useCallback, useMemo} from 'react';
import {Container, Header, Logo} from './styles';
import {FlatList} from 'react-native';
import api from '../../services/api';
import logo from '../../assets/marvel.png';
import Character from '../Character';
import CharacterLoading from '../CharacterLoading';

type CharactersState = Marvel.Character[] | undefined;
type Item = {item: Marvel.Character};

const Characters = () => {
  const [characters, setCharacters] = useState<CharactersState>([]);
  const [page, setPage] = useState(0);
  const limit = 20;

  const offset = useMemo(() => page * limit, [page]);

  const getCharacters = useCallback(async () => {
    const {
      data: {
        data: {results},
      },
    } = await api.get(
      `/characters?orderBy=name&limit=${limit}&offset=${offset}`,
    );
    setCharacters((state) => [...state, ...results]);
  }, [offset]);

  useEffect(() => {
    getCharacters();
  }, [getCharacters]);

  const renderItem = ({item}: Item) => (
    <Character data={item} onPress={() => console.log(item.id)} />
  );

  const onEndReached = useCallback(() => setPage((state) => ++state), []);

  return (
    <Container>
      <Header>
        <Logo source={logo} />
      </Header>
      <FlatList
        data={characters}
        keyExtractor={({name}) => name}
        numColumns={2}
        renderItem={renderItem}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.2}
        ListFooterComponent={<CharacterLoading />}
      />
    </Container>
  );
};

export default Characters;
