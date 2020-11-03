import React, {useEffect, useState, useCallback, useMemo} from 'react';
import {Container, Header, Logo} from './styles';
import {FlatList} from 'react-native';
import api from '../../services/api';
import logo from '../../assets/marvel.png';
import Character from '../Character';
import CharacterLoading from '../CharacterLoading';

function Characters() {
  const [characters, setCharacters] = useState<Marvel.Character[]>([]);
  const [page, setPage] = useState(0);
  const limit = 10;

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

  const renderItem = ({item}: Marvel.CharacterItem) => (
    <Character item={item} />
  );

  const onEndReached = useCallback(() => setPage((state) => ++state), []);

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
        onEndReached={onEndReached}
        onEndReachedThreshold={0.1}
        ListFooterComponent={<CharacterLoading />}
      />
    </Container>
  );
}

export default Characters;
