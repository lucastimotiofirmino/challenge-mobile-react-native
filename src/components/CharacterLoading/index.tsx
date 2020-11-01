import React from 'react';
import {Container, Loading, Indicator} from './styles';

function CharacterLoading() {
  return (
    <Container>
      <Loading>
        <Indicator />
      </Loading>
      <Loading>
        <Indicator />
      </Loading>
    </Container>
  );
}

export default CharacterLoading;
