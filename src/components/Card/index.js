import React from 'react';
import { useDispatch } from 'react-redux';

import { seeItemDetails } from '~/store/ducks/itemDetails';

import {
  Container,
  Cover,
  CoverContainer,
  DetailsContainer,
  Name,
  Description,
  RightContainer,
  LikeButton,
  Like,
} from './styles';

const Card = ({ item, section, likeUnlikeAction, isLiked }) => {
  const dispatch = useDispatch();

  const seeDetails = () => {
    dispatch(seeItemDetails(item, section));
  };

  return (
    <Container onPress={seeDetails}>
      <CoverContainer>
        <Cover
          source={{
            uri: `${item.thumbnail.path}/portrait_xlarge.${item.thumbnail.extension}`,
          }}
        />
      </CoverContainer>
      <DetailsContainer>
        <Name>{item.name || item.title}</Name>
        <Description>{item.description || 'Sem descrição'}</Description>
      </DetailsContainer>
      <RightContainer>
        <LikeButton onPress={() => likeUnlikeAction(item, isLiked)}>
          <Like isLiked={isLiked} />
        </LikeButton>
      </RightContainer>
    </Container>
  );
};

export default Card;
