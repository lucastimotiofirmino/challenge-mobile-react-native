import React, {useState} from 'react';

import {Container, Image, Text} from './styles';

import {Modal} from 'react-native';
import Description from '../ModalDescription';

export interface HeroesItemProps {
  name: string;
  path: string;
  extension: string;
  onHeroPress(): void;
}

const HeroesItem: React.FC<HeroesItemProps> = ({
  name,
  path,
  extension,
  onHeroPress,
}) => {
  return (
    <Container onPress={onHeroPress}>
      <Image source={{uri: `${path}.${extension}`}} />
      <Text>{name}</Text>
    </Container>
  );
};

export default HeroesItem;
