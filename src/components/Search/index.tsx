import React, {useState, useEffect, useMemo} from 'react';
import {Container, Header, Logo, Input, Empty, Loading} from './styles';
import {FlatList} from 'react-native';
import api from '../../services/api';
import logo from '../../assets/marvel.png';
import Character from '../Character';
import useDebounce from '../../hooks/useDebounce';

const Search = () => {
  const [characters, setCharacters] = useState<Marvel.Character[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');
  const nameStartsWith = useDebounce<string>(value, 500);

  const onChangeText = (text: string) => {
    setValue(text);
  };

  useEffect(() => {
    setLoading(true);
    async function getCharactersByName() {
      const {
        data: {
          data: {results},
        },
      } = await api.get(
        `/characters?orderBy=name&nameStartsWith=${nameStartsWith}`,
      );
      setCharacters(results);
      setLoading(false);
    }

    nameStartsWith ? getCharactersByName() : setCharacters([]);
  }, [nameStartsWith]);

  const renderItem = ({item}: Marvel.CharacterItem) => (
    <Character item={item} />
  );

  const ListEmptyComponent = () => (
    <Empty>{value ? 'Nenhum personagem encontrado com esse nome!' : ''}</Empty>
  );

  const isSearching = useMemo(() => Boolean(value) && loading, [
    value,
    loading,
  ]);

  return (
    <Container>
      <Header>
        <Logo source={logo} />
      </Header>
      <Input
        placeholder="Qual o nome personagem que deseja buscar?"
        onChangeText={onChangeText}
      />
      {isSearching ? (
        <Loading />
      ) : (
        <FlatList
          data={characters}
          keyExtractor={(item, index) => `${item.id}${index}`}
          numColumns={2}
          renderItem={renderItem}
          ListEmptyComponent={ListEmptyComponent}
        />
      )}
    </Container>
  );
};

export default Search;
