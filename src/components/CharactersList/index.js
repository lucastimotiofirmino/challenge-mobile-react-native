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

import {
  Container,
  LoadingContainer,
  Cover,
  CoverContainer,
  DetailsContainer,
  Name,
  Description,
  RightContainer,
  LikeButton,
  Like,
} from './styles';

const CharactersList = () => {
  const { list, length, listByName, likedCharactersIds } = useSelector(
    (state) => state.characters,
  );
  const { nameForSearch } = useSelector((state) => state.app);

  const [more, setMore] = useState(1);
  const [gettingMoreCharacters, setGettingMoreCharacters] = useState(false);
  const [likeUnlike, setLikeUnlike] = useState(false);

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
    setLikeUnlike(!likeUnlike);
    if (isLiked) dispatch(unlikeACharacter(characterId));
    else dispatch(likeACharacter(characterId));
  };

  const renderCharacterPreview = ({ item }) => {
    const isLiked =
      likedCharactersIds.filter((id) => item.id === id).length > 0;

    return (
      <Container onPress={goToCharacter}>
        <CoverContainer>
          <Cover
            source={{
              uri: `${item.thumbnail.path}/portrait_xlarge.${item.thumbnail.extension}`,
            }}
          />
        </CoverContainer>
        <DetailsContainer>
          <Name>{item.name}</Name>
          <Description>{item.description}</Description>
        </DetailsContainer>
        <RightContainer>
          <LikeButton onPress={() => likeUnlikeThisCharacter(item.id, isLiked)}>
            <Like isLiked={isLiked} />
          </LikeButton>
        </RightContainer>
      </Container>
    );
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
      renderItem={renderCharacterPreview}
      renderLoading={renderLoading}
      getMore={getMoreCharacters}
      extraData={likedCharactersIds}
    />
  );
};

export default CharactersList;
