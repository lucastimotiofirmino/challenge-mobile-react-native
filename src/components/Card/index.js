import React from 'react';

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

const Card = ({ item, goToDetails = () => {}, likeUnlikeAction, isLiked }) => (
  <Container onPress={goToDetails}>
    <CoverContainer>
      <Cover
        source={{
          uri: `${item.thumbnail.path}/portrait_xlarge.${item.thumbnail.extension}`,
        }}
      />
    </CoverContainer>
    <DetailsContainer>
      <Name>{item.name || item.title}</Name>
      <Description>{item.description}</Description>
    </DetailsContainer>
    <RightContainer>
      <LikeButton onPress={() => likeUnlikeAction(item.id, isLiked)}>
        <Like isLiked={isLiked} />
      </LikeButton>
    </RightContainer>
  </Container>
);

export default Card;
