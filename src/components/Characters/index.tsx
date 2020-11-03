import React, {useEffect, useState, useCallback, useMemo} from 'react';
import {Container, Header, Logo, Switch} from './styles';
import {FlatList} from 'react-native';
import {useDispatch} from 'react-redux';
import api from '../../services/api';
import logo from '../../assets/marvel.png';
import Character from '../Character';
import CharacterLoading from '../CharacterLoading';
import {changeThemeToDark, changeThemeToLight} from '../../store/theme/actions';
import {LightTheme, DarkTheme} from '../../themes';

function Characters() {
  const [characters, setCharacters] = useState<Marvel.Character[]>([]);
  const [switchValue, setSwitchValue] = useState(false);
  const dispatch = useDispatch();
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

  const onValueChange = useCallback(() => {
    switchValue
      ? dispatch(changeThemeToLight(LightTheme))
      : dispatch(changeThemeToDark(DarkTheme));

    setSwitchValue((state) => !state);
  }, [dispatch, switchValue]);

  return (
    <Container>
      <Header>
        <Logo source={logo} />
        <Switch onValueChange={onValueChange} value={switchValue} />
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
