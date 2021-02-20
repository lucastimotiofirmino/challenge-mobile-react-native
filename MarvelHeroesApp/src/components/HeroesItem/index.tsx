import React, {useState} from 'react';

import {Container, Image, Text, HeartButton, Heart} from './styles';
import HeartIcon from '../../assets/heart.png';
import BrokenHeartIcon from '../../assets/brokenheart.png'

export interface HeroesItemProps {
  name: string;
  path: string;
  extension: string;
  onHeroPress(): void;
  onHeroFavorite():void;
  isFavorited: boolean;
}

const HeroesItem: React.FC<HeroesItemProps> = ({
  name,
  path,
  extension,
  onHeroPress,
  onHeroFavorite,
  isFavorited
}) => {
  return (
    <Container onPress={onHeroPress}>
      <Image source={{uri: `${path}.${extension}`}} />
      <HeartButton onPress={onHeroFavorite}>
        <Heart source={isFavorited ? BrokenHeartIcon : HeartIcon}/>
      </HeartButton>
      <Text>{name}</Text>
    </Container>
  );
};

export default HeroesItem;
