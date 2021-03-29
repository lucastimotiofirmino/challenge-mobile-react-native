import React from 'react';
import { useSelector } from 'react-redux';

import Header from '~/components/Header';
import SearchBox from '~/components/SearchBox';
import Sections from '~/components/Sections';
import CharactersList from '~/components/CharactersList';
import EventsList from '~/components/EventsList';
import SeriesList from '~/components/SeriesList';
import DetailsModal from '~/components/DetailsModal';

import { CHARACTERS, EVENTS, SERIES } from '~/constants/sections';

import { Container, Content } from './styles';

const Main = () => {
  const { section } = useSelector((state) => state.app);

  let List = <></>;

  console.tron.log('section', section);

  switch (section) {
    case CHARACTERS:
      List = <CharactersList />;
      break;
    case SERIES:
      List = <SeriesList />;
      break;
    case EVENTS:
      List = <EventsList />;
      break;
    default:
      return List;
  }

  return (
    <>
      <Container>
        <Header />
        <Content>
          <SearchBox />
          <Sections />
          {List}
        </Content>
      </Container>
      <DetailsModal />
    </>
  );
};

export default Main;
