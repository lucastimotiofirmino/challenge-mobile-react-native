import React from 'react';
import Modal from 'react-native-modal';
import { ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { CHARACTERS, EVENTS, SERIES } from '~/constants/sections';

import { reset } from '~/store/ducks/itemDetails';

import { likeACharacter, unlikeACharacter } from '~/store/ducks/characters';
import { likeAEvent, unlikeAEvent } from '~/store/ducks/events';
import { likeASerie, unlikeASerie } from '~/store/ducks/series';

import {
  Container,
  Cover,
  DetailsContainer,
  Name,
  Description,
  NameLikeContainer,
  Like,
  LikeButton,
  NameContainer,
  LikeContainer,
} from './styles';

const DetailsModal = () => {
  const { item, section } = useSelector((state) => state.itemDetails);
  const { likedCharacters, likedEvents, likedSeries } = useSelector(
    (state) => state.likes,
  );

  const dispatch = useDispatch();

  let likedList = null;
  let likeAction = null;
  let unlikeAction = null;
  let isLiked = null;

  switch (section) {
    case CHARACTERS:
      likedList = likedCharacters;
      likeAction = likeACharacter;
      unlikeAction = unlikeACharacter;
      break;
    case EVENTS:
      likedList = likedEvents;
      likeAction = likeAEvent;
      unlikeAction = unlikeAEvent;
      break;
    case SERIES:
      likedList = likedSeries;
      likeAction = likeASerie;
      unlikeAction = unlikeASerie;
      break;
    default:
      break;
  }

  if (item) {
    isLiked =
      likedList.filter((likedItem) => item.id === likedItem.id).length > 0;
  }

  const likeUnlikeItem = () => {
    if (isLiked) dispatch(unlikeAction(item));
    else dispatch(likeAction(item));
  };

  const closeDetails = () => {
    dispatch(reset());
  };

  return (
    <Modal
      isVisible={!!item}
      swipeDirection="down"
      animationIn="fadeInUp"
      onSwipeComplete={closeDetails}
      onBackButtonPress={closeDetails}
      propagateSwipe>
      <Container>
        {item && (
          <>
            <Cover
              source={{
                uri: `${item.thumbnail.path}/landscape_amazing.${item.thumbnail.extension}`,
              }}
            />
            <ScrollView
              contentContainerStyle={{
                flexGrow: 1,
                flex: 1,
              }}>
              <DetailsContainer>
                <NameLikeContainer>
                  <NameContainer>
                    <Name>{item.name || item.title}</Name>
                  </NameContainer>
                  <LikeContainer>
                    <LikeButton onPress={likeUnlikeItem}>
                      <Like isLiked={!!isLiked} />
                    </LikeButton>
                  </LikeContainer>
                </NameLikeContainer>
                <Description>{item.description || 'Sem descrição'}</Description>
              </DetailsContainer>
            </ScrollView>
          </>
        )}
      </Container>
    </Modal>
  );
};

export default DetailsModal;
