import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import {
  getCharacters,
  getCharactersByName,
  likeACharacter,
  unlikeACharacter,
} from '~/store/ducks/characters';

import List from '../List';

import { LoadingContainer } from './styles';

const CharactersList = () => {
  const { list, length, listByName, likedCharactersIds } = useSelector(
    (state) => state.characters,
  );
  const { nameForSearch } = useSelector((state) => state.app);

  const [more, setMore] = useState(1);
  const [gettingMoreCharacters, setGettingMoreCharacters] = useState(false);

  const dispatch = useDispatch();

  const getMoreCharactersDecision = () => {
    if (nameForSearch === '') dispatch(getCharacters());
    else dispatch(getCharactersByName());
  };

  useEffect(() => {
    if (more !== 1 || length === 0) getMoreCharactersDecision();
  }, [more]);

  useEffect(() => {
    setGettingMoreCharacters(false);
  }, [list, listByName]);

  const getMoreCharacters = () => {
    setMore(more + 1);
    setGettingMoreCharacters(true);
  };

  const goToCharacter = () => {};

  const likeUnlikeThisCharacter = (characterId, isLiked) => {
    if (isLiked) dispatch(unlikeACharacter(characterId));
    else dispatch(likeACharacter(characterId));
  };

  const renderLoading = () =>
    gettingMoreCharacters ? (
      <LoadingContainer>
        <ActivityIndicator size="small" color="white" />
      </LoadingContainer>
    ) : (
      <></>
    );

  const characterList = listByName.length > 0 ? listByName : list;

  return (
    <List
      list={characterList}
      renderLoading={renderLoading}
      getMore={getMoreCharacters}
      likeUnlikeAction={likeUnlikeThisCharacter}
      goToDetails={goToCharacter}
      likedIds={likedCharactersIds}
    />
  );
};

export default CharactersList;
