import React, { useEffect } from 'react';

import { getCharacters } from '~/api/calls/characters';

import { Container } from './styles';

const Main = () => {
  useEffect(() => {
    getCharacters();
  }, []);

  return <Container />;
};

export default Main;
