import React, { useEffect } from 'react';

import { getCharacters } from '~/api/calls/characters';

import Header from '~/components/Header';
import SearchBox from '~/components/SearchBox';
import Sections from '~/components/Sections';

import { Container, Content } from './styles';

const Main = () => {
  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <Container>
      <Header />
      <Content>
        <SearchBox />
        <Sections />
      </Content>
    </Container>
  );
};

export default Main;
