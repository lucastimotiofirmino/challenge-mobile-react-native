import React, { useEffect, useState } from 'react';
import { Text, ActivityIndicator } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { getCharacters } from '~/store/ducks/characters';

import List from '../List';

import { Container, LoadingContainer } from './styles';

const CharactersList = () => {
  const { list, length } = useSelector((state) => state.characters);

  const [more, setMore] = useState(1);
  const [gettingMoreCharacters, setGettingMoreCharacters] = useState(false);

  const dispatch = useDispatch();

  console.tron.log('pages', 1);

  useEffect(() => {
    if (more !== 1 || length === 0) dispatch(getCharacters());
  }, [more]);

  useEffect(() => {
    setGettingMoreCharacters(false);
  }, [list]);

  const getMoreCharacters = () => {
    setMore(more + 1);
    setGettingMoreCharacters(true);
  };

  const goToCharacter = () => {};

  const renderCharacterPreview = ({ item, index }) => (
    <Container onPress={goToCharacter}>
      <Text>{index}</Text>
    </Container>
  );

  const renderLoading = () =>
    gettingMoreCharacters ? (
      <LoadingContainer>
        <ActivityIndicator size="small" color="white" />
      </LoadingContainer>
    ) : (
      <></>
    );

  return (
    <List
      list={list}
      renderItem={renderCharacterPreview}
      renderLoading={renderLoading}
      getMore={getMoreCharacters}
    />
  );
};

export default CharactersList;
