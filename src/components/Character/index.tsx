import React from 'react';
import {Container, Title, Image} from './styles';

interface CharacterData {
  data: Marvel.Character;
}

function Character({data}: CharacterData) {
  const {id, name, thumbnail} = data;
  const image = `${thumbnail?.path}.${thumbnail?.extension}`;
  return (
    <Container onPress={() => console.log(id)}>
      <Image source={{uri: image}} width={100} height={50} />
      <Title>{name}</Title>
    </Container>
  );
}

export default Character;
