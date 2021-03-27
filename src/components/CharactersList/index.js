import React, { useEffect, useState, useMemo, useRef } from 'react';
import { FlatList, Text, ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';

import { getCharacters } from '~/api/calls/characters';

import { Container, LoadingContainer } from './styles';

const CharactersList = () => {
  const { length, list } = useSelector((state) => state.characters);
  const [page, setPage] = useState(1);
  const [gettingMoreCharacters, setGettingMoreCharacters] = useState(false);

  useEffect(() => {
    getCharacters({ length });
  }, [page]);

  useEffect(() => {
    setGettingMoreCharacters(false);
  }, [list]);

  const getMoreCharacters = () => {
    setPage(page + 1);
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

  return useMemo(
    () => (
      <FlatList
        data={list}
        renderItem={renderCharacterPreview}
        ListFooterComponent={renderLoading}
        style={{ flexGrow: 0 }}
        extraData={list}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        onEndReached={getMoreCharacters}
        onEndReachedThreshold={0}
      />
    ),
    [list],
  );
};

export default CharactersList;
