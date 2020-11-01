import React from 'react';
import {Container, Title, Image} from './styles';

interface CharacterData {
  data: Marvel.Character;
  onPress(): void;
}

function Character({data, onPress}: CharacterData) {
  const {name, thumbnail} = data;
  const image = `${thumbnail?.path}.${thumbnail?.extension}`;
  return (
    <Container onPress={onPress}>
      <Image source={{uri: image}} />
      <Title>{name}</Title>
    </Container>
  );
}

export default Character;
