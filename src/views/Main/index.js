import React from 'react';
import { View } from 'react-native';

import Header from '~/components/Header';
import SearchBox from '~/components/SearchBox';
import Sections from '~/components/Sections';
import CharactersList from '~/components/CharactersList';

import { Container, Content } from './styles';

const Main = () => (
  <Container>
    <Header />
    <Content>
      <SearchBox />
      <Sections />
      <CharactersList
        characters={[{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]}
      />
    </Content>
  </Container>
);

export default Main;
